import { useState, useEffect } from "react";

export default function LightComponent(props) {
  const [currentLight, setCurrentLight] = useState(null);
  const [previousLight, setPreviousLight] = useState(null);
  const diffrence = [];

  useEffect(() => {
    const currentLightValue = Light(props);
    setCurrentLight(currentLightValue);

    if (previousLight !== null) {
      let difference = currentLightValue - previousLight;
    }

    setPreviousLight(currentLightValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return <div>${props};</div>;
}
