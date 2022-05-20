import React from "react";

const Counter = ({ charCount, ringStyle }) => {
  return (
    <div id="Counter">
      <p>You inserted {charCount} characters</p>
      <svg>
        <circle id="gray" cx="50%" cy="50%" r="15"></circle>
        <circle id="colored" cx="50%" cy="50%" r="15" style={ringStyle}></circle>
      </svg>
    </div>
  );
};

export default Counter;
