import { useState } from "react";
import "../css/Results.css";

const ResultBox = ({ el, index }) => {
  const [showMore, setShowMore] = useState(false);
  const userPrompt = el.prompt;
  const userResponse = el.response;

  return (
    // <div className={`showMoreText ${showMore ? true : false}`}>
    <div>
      <div>{showMore || el.prompt.length < 20 ? userPrompt: `${userPrompt.substring(0,20).concat("...")}`}</div>
      <div>{showMore || el.response.length < 100 ? userResponse : `${userResponse.substring(0,100).concat("...")}`}</div>
      {/* <div className="resultItem">{userPrompt}</div>
      <div className="resultItem">{userResponse}</div> */}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default ResultBox;
