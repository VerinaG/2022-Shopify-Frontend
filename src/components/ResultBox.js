const ResultBox = ({ el, index }) => {
  return (
    <div>
        <div>{el.prompt}</div>
        <div>{el.response}</div>
    </div>
  );
};

export default ResultBox;
