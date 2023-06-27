function SmartScreen({numberOfQuestions,dispatch}) {
    return (
        <div>
        <h2>WELCOME TO OUR QUIZ</h2>
        <p> {numberOfQuestions} questions to test your React Mastery.</p>
        <button className="btn btn-primary" onClick={()=>dispatch({type:'start',})} >Let's Start</button>
        </div>
    )
}

export default SmartScreen
