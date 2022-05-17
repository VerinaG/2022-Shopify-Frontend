import React from "react";
import ResultBox from "./ResultBox";

const ResultList = ({ responseArray }) => {
  return (
      <div>
         {responseArray.map((el, index) => {
        return (
          <div key={index}>
            <ResultBox el={el} index={index}></ResultBox>
          </div>
        );
      })} 
      </div>
  );
};

export default ResultList;
