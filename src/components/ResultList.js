import React from "react";
import ResultBox from "./ResultBox";
import "../css/Results.css"

const ResultList = ({ responseArray }) => {
  console.log(responseArray[0])
  return (
      <div>
         {responseArray[0] !== '' && responseArray.map((el, index) => {
        return (
          <div className="Results" key={index}>
            <ResultBox el={el} index={index}></ResultBox>
          </div>
        );
      })} 
      </div>
  );
};

export default ResultList;
