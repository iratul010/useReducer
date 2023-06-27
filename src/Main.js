import { useEffect, useReducer } from "react";
import Loading from "./Loading";
import Errors from "./Errors";
import SmartScreen from "./SmartScreen";
import Questions from "./Questions";
 
const initialStates = {
    questions:[],
    //loading,ready,error,active,finished
    status:'loading',
};
function reducer(state,action){
    switch(action.type){
        case "dataReceived":
            return {...state,questions:action.payload,status:'ready'}
        case "dataFailed":
            return {...state, status:'error'}
        case "start":
            return {...state, status:'active'}
        default: 
        throw new Error("Unknown Error")
    }
}

function Main() {
  const [ {questions,status},dispatch] = useReducer(reducer,initialStates);
  const numberOfQuestions= questions.length;
  console.log(questions)

    useEffect( ()=>{
        fetch("http://localhost:9000/questions").then(res=>res.json()).then((data)=>dispatch({type:'dataReceived',payload:data})).catch(err=> dispatch({type:'dataFailed' }))
    },[])
    return (
        <div>
            <h2>Quiz</h2>
            { status=== "loading" && <Loading/>}
            { status=== "error" && <Errors/>}
            { status=== "ready" && <SmartScreen numberOfQuestions={numberOfQuestions} dispatch={dispatch}/>}
            { status=== "active" && <Questions />}

        </div>
    )
}

export default Main
