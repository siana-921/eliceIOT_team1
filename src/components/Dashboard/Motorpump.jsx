import { useState, useEffect } from "react";

// 모터펌프
export default function Motorpump(props) {
  const [currentMotorpump, setCurrentMotorpump] = useState(null);
  const [previousMotorpump, setPreviousMotorpump] = useState(null);
  const difference = [];

  useEffect(() => {
    const currentMotorpumpValue = Motorpump(props);
    setCurrentLight(currentMotorpumpValue);

    if (previousMotorpump !== null) {
      let difference = currentMotorpumpValue - previousMotorpump;
      console.log(${difference});
    }

    setPreviousLight(currentMotorpumpValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (<div>퍼프동작</div>);
}
