import React, {useEffect, useState} from "react";


function BlinkingText({children}) {
  const [result, setResult] = useState(true);

  useEffect(() => {
    const delay = Math.random() * (1100 - 250) + 250;

    const timeout = setTimeout(() => {
      setResult(prev => !prev);
    }, delay);

    return () => clearTimeout(timeout);
  }, [result]);

  return (
    <span
      style={result ?
        {
          color: "#f5f5f5",

          textShadow: 
          `-0.1vmin 0.1vmin 0.1vmin #9b9b9b,
          -0.15vmin 0.15vmin 0.1vmin #9b9b9b,
          -0.2vmin 0.2vmin 0.1vmin #9b9b9b,
          -0.25vmin 0.25vmin 0.1vmin #9b9b9b,
          -0.3vmin 0.3vmin 0.1vmin #9b9b9b,
          -0.32vmin 0vmin 0.1vmin #ffffff80,
          -3px 6px 10px #ffffff33,
          1px 9px 35px #ffffff33,
          1px 10px 70px #ffffff66`
        }:{
          color: "#626262",

          textShadow: 
            `-0.1vmin 0.1vmin 0.1vmin #3c3c3c,
            -0.15vmin 0.15vmin 0.1vmin #3c3c3c,
            -0.2vmin 0.2vmin 0.1vmin #3c3c3c,
            -0.25vmin 0.25vmin 0.1vmin #3c3c3c,
            -0.3vmin 0.3vmin 0.1vmin #3c3c3c,
            -0.32vmin 0vmin 0.1vmin #3c3c3c,
            -3px 6px 10px #34343433,
            1px 9px 35px #34343433,
            1px 10px 70px #34343466`
        }
      }
    >
      {children}
    </span>
  );
}

export default BlinkingText;