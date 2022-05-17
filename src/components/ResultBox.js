import { useState } from "react";

const ResultBox = ({ el, index }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={`showMoreText ${showMore ? true : false}`}>
      <div>{el.prompt}</div>
      <div>{el.response}</div>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default ResultBox;
