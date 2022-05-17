const ResultBox = ({ responseArray }) => {
  return (
    <div>
      {responseArray.map((el, index) => {
        return (
          <div>
            <div key={index}>
              <div>{el.prompt}</div>
              <div>{el.response}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultBox;
