import { useRef, useState } from "react";
import { apiFetch } from "../api/OpenApi";

const InputBox = ({ apiResponse, setApiResponse }) => {
  const maxCount = 280;
  const userText = useRef(null);
  const [engine, setEngine] = useState("text-curie-001");
  const [charCount, setCharCount] = useState(maxCount);

  const submitRequest = async () => {
    let text = userText.current.value;
    let promptResponse = await apiFetch(text, engine);
    let responseObj = {
      prompt: text,
      response: promptResponse,
    };
    setApiResponse(responseObj);
    userText.current.value = "";
    setCharCount(maxCount);
  };

  const generatePrompt = async () => {
    let text = "Generate random prompt.";
    let randomPrompt = await apiFetch(text, "text-curie-001");
    userText.current.value = randomPrompt.trim();
    setCharCount(maxCount - userText.current.value.length)
    
  };

  const selectEngine = (e) => {
    setEngine(e.target.value);
  };

  const characterCount = (e) => {
    setCharCount(maxCount - e.target.value.length);
  };

  return (
    <div>
      <select name="engines" onChange={(e) => selectEngine(e)}>
        <option value="text-curie-001">text-curie-001</option>
        <option value="text-davinci-002">text-davinci-002</option>
        <option value="text-babbage-001">text-babbage-001</option>
        <option value="text-ada-001">text-ada-001</option>
      </select>
      <textarea ref={userText} onChange={(e) => characterCount(e)}></textarea>
      <div>{charCount}/280</div>
      <button onClick={() => generatePrompt()}>Need Inspiration?</button>
      <button onClick={() => submitRequest()}>Submit</button>
    </div>
  );
};

export default InputBox;
