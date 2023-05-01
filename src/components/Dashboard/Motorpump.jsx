import { useState, useEffect } from 'react';

export default function Motorpump(props) {
  const [currentMotorpump, setCurrentMotorpump] = useState(null);
  const [previousMotorpump, setPreviousMotorpump] = useState(null);
  
  useEffect(() => {
    const currentMotorpumpValue = Motorpump(props);
    setCurrentLight(currentMotorpumpValue);

    if (previousMotorpump !== null) {
      let difference = currentMotorpumpValue - previousMotorpump;
      console.log(${difference});
    }

    setPreviousLight(currentMotorpumpValue);
  }, [props]);

  return (
    ${difference}
  );
}
