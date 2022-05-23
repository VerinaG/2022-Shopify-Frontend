import React from "react";

// Character counter countdown ring component 
const Counter = ({ charCount, ringStyle }) => {
  return (
    <div id="Counter">
      <svg>
        <circle id="gray" cx="50%" cy="50%" r="8"></circle>
        <circle id="colored" cx="50%" cy="50%" r="8" style={ringStyle}></circle>
      </svg>
    </div>
  );
};

export default Counter;
