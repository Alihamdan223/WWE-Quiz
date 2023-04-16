const QuizFinished = ({outCome}) => {
    return (
    <div style={{textAlign: 'center', fontFamily: 'cursive', fontWeight: 500}}>
            <h4>The score is <span>{outCome.score}</span></h4>
            <h4>You've selected <span>{outCome.correctAnswers} Correct {outCome.correctAnswers > 1 ? "Answers" : "Answer"}</span></h4>
            <h4>You've selected <span>{outCome.wrongAnswers} Wrong {outCome.wrongAnswers > 1 ? "Answers" : "Answer"}</span></h4>
            <h2>{outCome.correctAnswers >= 5 ? "You've Passed The Quiz! :)" : "You Failed The Quiz :("}</h2>
        </div>
    )
}

export default QuizFinished;