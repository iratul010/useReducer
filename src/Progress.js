function Progress({numQuestions,index,maxPointPossible,points,answer}) {
    return (
        <header className="progress p-4 m-5 w-[200px] h-[300px]">
             <progress  max={numQuestions} value={index+ Number(answer!==null)}/>
            <p className="">Question <strong>{index}/{numQuestions}</strong></p>
            <p>{points}/{maxPointPossible}</p>
        </header>
    )
}

export default Progress
