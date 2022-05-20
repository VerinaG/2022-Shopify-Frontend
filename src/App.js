import "./App.css";
import { useState, useEffect, useRef } from "react";
import InputBox from "./components/InputBox";
// import ResultBox from "./components/ResultBox";
import ResultList from "./components/ResultList";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [responseArray, setResponseArray] = useState([])
  const first = useRef(false)

  useEffect(() => {
    if (first.current == false){
      first.current = true;
    } else {
      let newArr = [apiResponse, ...responseArray];
      setResponseArray(responseArray => newArr);
    }
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
