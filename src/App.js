import "./App.css";
import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
// import ResultBox from "./components/ResultBox";
import ResultList from "./components/ResultList";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [responseArray, setResponseArray] = useState([]);
  useEffect(() => {
    let newArr = [apiResponse, ...responseArray];
    setResponseArray(newArr);
  }, [apiResponse]);

  return (
    <>
      <InputBox
        apiResponse={apiResponse}
        setApiResponse={setApiResponse}
      ></InputBox>
      <ResultList responseArray={responseArray}></ResultList>
    </>
  );
}

export default App;
