import { useState, useEffect } from 'react';

export default function Light(props) {
  const [currentLight, setCurrentLight] = useState(null);
  const [previousLight, setPreviousLight] = useState(null);
  
  useEffect(() => {
    const currentLightValue = Light(props);
    setCurrentLight(currentLightValue);

    if (previousLight !== null) {
      const difference = currentLightValue - previousLight;
      console.log(`The difference from the previous illumination is: ${difference}`);
    }

setPreviousLight(currentLightValue);
  }, [props]);

  return (
    // Render your component here
  );
}
