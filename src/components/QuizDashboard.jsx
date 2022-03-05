import Quiz from "./Quiz";
import questions from "./questionData";

const QuizDashboard = () => {
    return (
        <>
           <div style={{background: "rosybrown", textAlign: "center"}}>
                <h2>Welcome to the Quiz App</h2>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <Quiz questions = {questions} />
                </div>
                <div className="col-md-4">
                    <h4>Instructions</h4>
                </div>
                
            </div>
        </>
    )
}

export default QuizDashboard;