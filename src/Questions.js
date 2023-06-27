import React, { useState, useEffect } from 'react';

function Questions() {
  const [countdownValue, setCountdownValue] = useState(10);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownValue(prevValue => {
        const newValue = prevValue - 1;
      
        if (newValue === 0) {
          clearInterval(countdownInterval); // Clear the interval when countdownValue reaches 0
        }
        return newValue >= 0 ? newValue : 0;
      });
    }, 1000);
     
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);
  

  return (
    <div>
      <span className="countdown font-mono text-6xl">
        <span style={{ '--value': countdownValue }}></span>
      </span>
      <h2>Questions</h2>
    </div>
  );
}

export default Questions;
