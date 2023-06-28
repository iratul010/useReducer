function SmartScreen({numQuestions,dispatch}) {
    return (
        <div className="bg-slate-600 text-white text-center p-4">
        <h2 className="text-white font-bold p-3"  style={{fontFamily:'Codystar',fontSize:'4.6rem'}}>WELCOME TO OUR REACT QUIZ</h2>
        <p className="text-2xl p-3"> {numQuestions} questions to test your React Mastery.</p>
        <button className="btn btn-success text-2xl" onClick={()=>dispatch({type:'start',})} >Let's Start</button>
        </div>
    )
}

export default SmartScreen
