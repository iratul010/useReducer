function Options({questions,dispatch,answer}) {
 
  const hasAnswered = answer!==null;
 
    return (
        <div className="w-[500px]">
        { 
            <div className='bg-white text-black'>
           
          <div className="options flex justify-center items-center p-4 ">
          { questions.options.map((option,i)=>
            
            <button  className={` m-5 font-bold text-2xl text-green-500 btn btn-option ${i===answer? 'answer' : ''} ${hasAnswered ? i===questions.correctOption? 'correct' : 'wrong': '' }`}  key={option} disabled={hasAnswered} onClick={()=>dispatch({type:'newAnswer',payload:i})}>{option}</button>
            )}
            </div>
              </div>
            } 
        </div>
    )
}

export default Options;
