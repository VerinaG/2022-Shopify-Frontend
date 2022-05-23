import { useRef, useState } from "react";
import { apiFetch } from "../api/OpenApi";
import Counter from "./Counter";
import "../css/Counter.css";
import "../css/InputBox.css";

const InputBox = ({ apiResponse, setApiResponse }) => {
  const userText = useRef(null);
  const [engine, setEngine] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [ringStyle, setRingStyle] = useState({
    stroke: "",
    strokeDasharray: "",
  });

  // Calling request function to get response from API
  const submitRequest = async () => {
    let text = userText.current.value;
    let promptResponse = await apiFetch(text, engine, 300);
    let responseObj = {
      prompt: text,
      response: promptResponse,
    };
    setApiResponse(responseObj);
    userText.current.value = "";
    settingRingStyle(0);
    setCharCount(0);
  };

  // Calling API to generate random prompts 
  const generatePrompt = async () => {
    let text = "Generate random prompt.";
    let randomPrompt = await apiFetch(text, "text-curie-001", 164);
    userText.current.value = randomPrompt.trim();
    settingRingStyle(userText.current.value.length);
    setCharCount(userText.current.value.length);
  };

  const selectEngine = (e) => {
    setEngine(e.target.value);
  };

  const characterCount = (e) => {
    setCharCount(e.target.value.length);
    settingRingStyle(charCount);
  };

  // Updating ring as character count is updated
  const settingRingStyle = (charCount) => {
    const r = 8;
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
      <h2>CONVERSATION PRACTICE</h2>
      <h3>It's hard making conversation, especially after the pandemic. Play with this AI to get back into the groove of thinking of creative conversation starters, and fun responses!</h3>
      <select name="engines" onChange={(e) => selectEngine(e)}>
        <option selected disabled hidden>Choose your engine!</option>
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
      <div className="inputBox">
        <button className="first" onClick={() => generatePrompt()}>
          Need Inspiration?
        </button>
        <Counter charCount={charCount} ringStyle={ringStyle}></Counter>
        <button disabled={!charCount || !engine} className="last" onClick={() => submitRequest()}>Submit</button>        
      </div>
    </div>
  );
};

export default InputBox;
