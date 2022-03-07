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
            <div>
                <h4 style={{color:"green", borderTop:"2px solid black"}}>Instructiosn</h4>
                <h6>1. All Questiosn are equal weigth of one marks.</h6>
                <h6>2. No negative marks</h6>
                <h6>3. Not attempt is consider as zero marks</h6>
            </div>
        </div>
    )
}

export default ButtonGroup;