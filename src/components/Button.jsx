import './buttonStyle.css';
const Button = ({question, handleButtonClick}) => {
    return(
        <button type="button" className="btn btn-secondary button-style" 
        onClick={() => handleButtonClick(question)}>{question.questionId}</button>   
    );
}

export default Button;