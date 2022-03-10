import Quiz from "./Quiz";
import questions from "./questionData";
import QuizContext from "./QuizContext";
import ButtonGroup from "./ButtonGroup";
import { useEffect, useState } from "react";
import QuizQuestion from "./QuizQuestion";
import ScoreBoard from "./ScoreBoard";
import WarningModal from "./WarningModal";

const QuizDashboard = () => {
    const [question, setQuestion] = useState({});
    let [calScores, setCalScore] = useState([]);
    const [scoreCard, setScoreCard] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const message = {messageh: "Do you want to submit Quiz", messagep:"Once submit can't change"};
    
    
    const handleQuestion = (data) => {
        console.log('Handle Questions called', data);
        setQuestion(data);
    }

    const handleNextQuestion = (data) => {
        const index = questions.indexOf(data);
        if(index+1 <=questions.length) {
            setQuestion(questions[index+1]);
        }
    }

    const showModal = () => {
        setIsOpen(true);
    }

    const showResult = () => {
        setIsOpen(false);
        document.body.style.overflow = "hidden";
        let score = 0; 
        let wrong = 0;
        calScores.map(list => {
            score = score+list.marks
        });
        wrong = calScores.length - score;
        const percentageMarks = (score /questions.length)*100;
        setScoreCard({score: score, attempt:calScores.length, wrong: wrong, percent:percentageMarks});
    }

    const handleCalculateScore = (data) => {
        console.log('Cal score in dashboard', data);
        const index = calScores.findIndex(item => item.id === data.id);
        calScores = [...calScores];
        if(index>=0)
            calScores[index] = data;
        else {
            calScores.push(data);
        }
        setCalScore(calScores);
        console.log('calscores', calScores);
    }

    return (
        <>
           <div style={{background: "rosybrown", textAlign: "center"}}>
                <h2>Welcome to the Quiz App</h2>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4 question-list">
                            <ButtonGroup questions={questions} handleQuestion={handleQuestion}/>
                        </div>
                        <div className="col-md-8">
                            {question && question.options && question.options.length && 
                            <QuizQuestion key={question.questionId} question={question}
                            handleNext = {handleNextQuestion} handleCalculateScore={handleCalculateScore}/> }
                           
                            {/* <QuizContext.Provider value={questions} >
                                <Quiz />
                            </QuizContext.Provider> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 instruction-result">
                    <ScoreBoard result={scoreCard} />
                    <button className="btn btn-success" style={{position:"absolute", marginTop:"17%", marginLeft: "8%"}}
                    onClick={showModal}>Submit Quiz</button>
                    <WarningModal message={message} isOpen={isOpen} onClose={()=>setIsOpen(false)} onContinue={showResult} />
                </div>
            </div>
        </>
    )
}

export default QuizDashboard;