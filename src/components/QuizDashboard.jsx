import Quiz from "./Quiz";
import questions from "./questionData";
import QuizContext from "./QuizContext";
import ButtonGroup from "./ButtonGroup";
import { useEffect, useState } from "react";
import QuizQuestion from "./QuizQuestion";

const QuizDashboard = () => {
    const [question, setQuestion] = useState({});
    
    const handleQuestion = (data) => {
        console.log('Handle Questions called', data);
        setQuestion(data);
        console.log('after', question);
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
                            {question && question.options && question.options.length && <QuizQuestion key={question.questionId} question={question}/> }
                            {/* <QuizContext.Provider value={questions} >
                                <Quiz />
                            </QuizContext.Provider> */}
                        </div>
                    </div>

                    
                </div>
                <div className="col-md-4 instruction-result">
                    <h4>Instructions</h4>
                </div>
                
            </div>
        </>
    )
}

export default QuizDashboard;