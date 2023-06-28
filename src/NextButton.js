function NextButton({dispatch,answer}) {
    if(answer===null) return null;
    return (
        <div>
        <button className='btn btn-primary' onClick={()=>dispatch({type:'nextQuestions', })}>next</button>
        </div>
    )
}

export default NextButton
