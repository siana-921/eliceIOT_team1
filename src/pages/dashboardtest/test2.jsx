import ReactGaugeMeter from "react-gauge-meter";

const Test2 = () => {
  return (
    <ReactGaugeMeter
      firstColor="red"
      secondColor="green"
      thirdColor="blue"
      value={50}
      style={{ height: "500px", width: "100%" }}
    />
  );
};

export default Test2;
