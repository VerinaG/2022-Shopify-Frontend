import { useState, useRef } from "react";
import "../css/Results.css";

const ResultBox = ({ el, index }) => {
  const [showMore, setShowMore] = useState(true);
  const inputLength = useRef(false);
  const userPrompt = "Prompt: ".concat(el.prompt);
  const userResponse = "Response: ".concat(el.response);

  // Set checkInputLength variable to hide Show More/Show Less button if prompt and response are short
  const checkInputLength = () => {
    if (el.prompt.length > 50 || el.response.length > 100) {
      inputLength.current = true;
    } else {
      inputLength.current = false;
    }
  };

  return (
    <div>
      <div className="ResultBox">
        {showMore || el.prompt.length < 50
          ? userPrompt
          : `${userPrompt.substring(0, 50).concat("...")}`}
      </div>
      <div>
        {showMore || el.response.length < 100
          ? userResponse
          : `${userResponse.substring(0, 100).concat("...")}`}
      </div>
      {checkInputLength()}
      {inputLength.current && (
        <button className="showButton" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ResultBox;
