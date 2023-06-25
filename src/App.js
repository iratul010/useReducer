import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  if (action.type === 'inc') return { value: state.value + action.payload };
  if (action.type === 'dec') return { value: state.value - action.payload };
  if (action.type === 'setCount') return { value: action.payload };
  return state;
}

const initial = { value: 0 };

function App() {
  const [count, dispatch] = useReducer(reducer, initial);

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    dispatch({ type: 'setCount', payload: inputValue });
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <h2 className='text-3xl text-green-600 text-center'>
        <span className='underline text-red-500'>Hooks</span>: useReducer
      </h2>
      <div className='flex justify-center items-center w-[400px] m-5 gap-5'>
        <button className="btn btn-outline btn-success" onClick={() => dispatch({ type: 'inc', payload: 1 })}>
          Increment
        </button>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
          
          onChange={handleInputChange}
        />
        <button className="btn btn-outline btn-error" onClick={() => dispatch({ type: 'dec', payload: 1 })}>
          Decrement
        </button>
        <div className="stat-value">{count.value}</div>
      </div>
    </div>
  );
}

export default App;
