import {useState} from 'react';
import QuizFinished from "./QuizFinished";

const Quiz = ({questions}) => {

    const [activeQuestion, setActiveQuestion] = useState(0); 
    const [selectedAnswer, setSelectedAnswer] = useState(''); 
    const [idSelected, setIdSelected] = useState(null);
    const [showOutcome, setShowOutcome] = useState(false);
    const [outCome, setOutCome] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    })

    const {question, answers, id, correct} = questions[activeQuestion];
    
    function onClickNext() {
        setIdSelected(null);
        setOutCome((prev) => 
            selectedAnswer ?
            {
                ...prev, 
                score: prev.score + 1,
                correctAnswers: prev.correctAnswers + 1
            }
            : {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1
            }
        )
        if(activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            setActiveQuestion(0);
            setShowOutcome(true);
        }
    }

    function onHandleAnswer(answer, index) {
        setIdSelected(index);
        if(answer === correct) {
            setSelectedAnswer(true);
        } else {
            setSelectedAnswer(false); 
        }
    }

  return (
    <section className="ui-section">
        {!showOutcome ? (
        <div>
        <header>
        <h1>Question: {id}</h1>
        <h2>{question}</h2>
        </header>
        <ul className="answers-list">
            {answers.map((ans, index) => {
                return <li onClick={() => onHandleAnswer(ans, index)} key={index}
                className={idSelected === index ? "StyleIt" : null}>{ans}</li>
            })}
        </ul>
      <button onClick={onClickNext} className="press" disabled={idSelected === null}>{activeQuestion === questions.length - 1 ? "FINISH": "NEXT"}</button>
      </div>
      ) : (
        <QuizFinished outCome={outCome} />
      )
        }
      </section>
  );
};

export default Quiz;
