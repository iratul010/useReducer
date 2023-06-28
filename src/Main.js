import { useEffect, useReducer } from "react";
import Loading from "./Loading";
import Errors from "./Errors";
import SmartScreen from "./SmartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
 
const initialStates = {
    questions:[],
    //loading,ready,error,active,finished
    status:'loading',
    index:0,
    answer:null,
    points: 0,
};
function reducer(state,action){
    switch(action.type){
        case "dataReceived":
            return {...state,questions:action.payload,status:'ready'}
        case "dataFailed":
            return {...state, status:'error'}
        case "start":
            return {...state, status:'active'}
        case "newAnswer":
            const question = state.questions.at(state.index);
            console.log(question)
            return {...state,  answer:action.payload, points: action.payload === question.correctOption ?  state.points + question.points : state.points}

        case "nextQuestions":
            return {...state, index:  state.index + 1,answer:null}
       
        default: 
        throw new Error("Unknown Error")
    }
}
 

function Main() {
  const [ {questions,status,index,answer,points},dispatch] = useReducer(reducer,initialStates);
 
  const numQuestions= questions.length;
  const maxPointPossible = questions.reduce((prev,cur)=>prev+cur.points,0);

 

    useEffect( ()=>{
        fetch("http://localhost:9000/questions").then(res=>res.json()).then((data)=>dispatch({type:'dataReceived',payload:data})).catch(err=> dispatch({type:'dataFailed' }))
    },[])
    return (
        <div>
            <h2>Quiz</h2>
            { status=== "loading" && <Loading/>}
            { status=== "error" && <Errors/>}
            { status=== "ready" && <SmartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
            { status=== "active" && (
                <>
                <Progress index={index} numQuestions={numQuestions} maxPointPossible={maxPointPossible}  points={points} answer={answer}/>
                <Questions questions ={questions[index]} dispatch={dispatch} index={index} answer={answer}/> 
           <NextButton dispatch={dispatch} answer ={answer}/>
            </>
            )
        }

        </div>
    )
}

export default Main
