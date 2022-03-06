import Button from "./Button";
import QuizQuestion from "./QuizQuestion";

const ButtonGroup = ({questions, handleQuestion}) => {

    const handleButtonClick = (question) => {
        handleQuestion(question);
    }

    return(
        <div>
            <h5 style={{marginTop: "5px", color: "indigo", borderBottom:"2px solid black"}}>Toltal Questions: 
            <span style={{border: "1px solid red",borderRadius:"40%", padding:"0px" }}>{questions.length}</span> </h5>
            {questions.map(question => 
                <Button key={question.questionId} question={question} 
                handleButtonClick={handleButtonClick}/>
            )}
        </div>
    )
}

export default ButtonGroup;