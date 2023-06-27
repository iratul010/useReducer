import React, { useReducer } from "react";
import Main from "./Main";
const initial = { count: 0, step: 1 };
function reducer(state, action) {
 
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return  initial;
    default:
      throw new Error('Unknown Action')
  }
}

function App() {
 
  const [state, dispatch] = useReducer(reducer, initial);
 

  const { count, step } = state;

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    dispatch({ type: "setCount", payload: inputValue });
  };

  const handleRangeChange = (event) => {
    const inputValue = Number(event.target.value);
    dispatch({ type: "setStep", payload: inputValue });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-3xl text-green-600 text-center">
        <span className="underline text-red-500">Hooks</span>: useReducer
      </h2>
      <div className="stat-value text-center p-5 m-5 rounded bg-emerald-950 w-[145px] text-white">
        {count}
      </div>
      <div className="w-[300px] flex flex-row gap-4 justify-center items-center">
        <input
          type="range"
          min={0}
          max={100}
          value={step}
          className="range"
          onChange={handleRangeChange}
        />
        <p className="text-2xl">{step}</p>
      </div>
      <div className="flex text-center justify-center items-center w-[400px] m-5 gap-5">
        <button
          className="btn btn-outline btn-error text-3xl"
          onClick={() => dispatch({ type: "dec", payload: 1 })}
        >
          -
        </button>

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline btn-success text-3xl"
          onClick={() => dispatch({ type: "inc", payload: 1 })}
        >
          +
        </button>
      </div>
      <button className="btn mb-5 btn-primary" onClick={()=>dispatch({type:'reset',})}>Reset</button>
      <Main/>
    </div>
  );
}

export default App;
 
 