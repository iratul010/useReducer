import React, { useState, useEffect } from 'react';
 
import Options from './Options';

function Questions({questions,dispatch,index ,answer}) {
  const [countdownValue, setCountdownValue] = useState(60);
 
  
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
   
      <h2>Questions</h2>
       <h2 className='text-2xl m-5 '>{questions.question}</h2>
        <Options questions={questions} dispatch={dispatch} answer={answer}  />
        <div className='text-2xl m-2 p-3 flex flex-row justify-between items-center'>
        {
          <span className="countdown font-mono text-6xl">
          <span style={{ '--value': countdownValue }}></span>
        </span>
        }
       </div>
    </div>
  );
}

export default Questions;
