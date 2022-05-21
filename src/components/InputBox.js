import { useRef, useState } from "react";
import { apiFetch } from "../api/OpenApi";
import Counter from "./Counter";
import CustomListBox from "./CustomListbox";
import "../css/Counter.css";
import "../css/InputBox.css";

const InputBox = ({ apiResponse, setApiResponse }) => {
  const maxCount = 280;
  const userText = useRef(null);
  const [engine, setEngine] = useState("text-curie-001");
  const [charCount, setCharCount] = useState(0);
  const [ringStyle, setRingStyle] = useState({
    stroke: "",
    strokeDasharray: "",
  });

  const submitRequest = async () => {
    let text = userText.current.value;
    let promptResponse = await apiFetch(text, engine);
    let responseObj = {
      prompt: text,
      response: promptResponse,
    };
    setApiResponse(responseObj);
    userText.current.value = "";
    settingRingStyle(0);
    setCharCount(0);
  };

  const generatePrompt = async () => {
    let text = "Generate random prompt.";
    let randomPrompt = await apiFetch(text, "text-curie-001");
    userText.current.value = randomPrompt.trim();
    settingRingStyle(userText.current.value.length);
    setCharCount(userText.current.value.length);
  };

  const selectEngine = (e) => {
    setEngine(e.target.value);
  };

  const characterCount = (e) => {
    // setCharCount(maxCount - e.target.value.length);
    setCharCount(e.target.value.length);
    settingRingStyle(charCount);
  };

  const settingRingStyle = (charCount) => {
    const r = 15;
    const circleLength = 2 * Math.PI * r;
    const twitterBlue = "rgb(29, 161, 242)";
    let colored = (circleLength * charCount) / 280;
    let gray = circleLength - colored;

    setRingStyle({
      stroke:
        280 - charCount <= 1
          ? "red"
          : 280 - charCount <= 20
          ? "orange"
          : twitterBlue,
      strokeDasharray: `${colored} ${gray}`,
    });
  };

  return (
    <div>
      {/* <CustomListBox></CustomListBox> */}
      <select name="engines" onChange={(e) => selectEngine(e)}>
        <option value="text-curie-001">text-curie-001</option>
        <option value="text-davinci-002">text-davinci-002</option>
        <option value="text-babbage-001">text-babbage-001</option>
        <option value="text-ada-001">text-ada-001</option>
      </select>
      <textarea
        ref={userText}
        onChange={(e) => characterCount(e)}
        maxLength={280}
        placeholder="Type your prompt here... (280 characters)"
      ></textarea>
      {/* <div>{charCount}/280</div> */}
      <div className="inputBox">
        <button className="first" onClick={() => generatePrompt()}>
          Need Inspiration?
        </button>
        <Counter charCount={charCount} ringStyle={ringStyle}></Counter>
        <button className="last" onClick={() => submitRequest()}>Submit</button>
        
        
      </div>
    </div>
  );
};

export default InputBox;
