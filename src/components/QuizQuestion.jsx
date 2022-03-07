import { useState } from "react";
const buttonMarginLeft =  {
    marginLeft: "9%",
}

const QuizQuestion = ({question, handleNext}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange =(event) => {
        console.log('option changed called', event.target.value);
        setSelectedOption(event.target.value)
    }
    const handleClear =() => {
        setSelectedOption('');
    }
    const handleSave = () => {
        console.log('handle save called');
    }
    const handleNextQuestion = () => {
        console.log('handle next click');
        handleNext(question);
    }

    return(
        <>
            <div className="card" style={{width: "28rem", margin: "5px"}}>
                <div className="card-body">
                    <h5 className="card-title">{question.question}</h5>
                </div>
                <form>
                    <div className="list-group list-group-flush">
                        {question.options.map((option, index) => 
                            // <button type="button" className="list-group-item btn btn-primary">{option}</button>
                            <div className="list-group-item" key={index}>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" 
                                        id={question.questionId} value={option} 
                                        checked={selectedOption === option}
                                        onChange={(e) => handleOptionChange(e)}/>
                                        <label className="form-check-label">{option}</label>
                                    </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <div style={buttonMarginLeft}>
                <button type="" className="btn btn-warning" style={buttonMarginLeft}
                onClick={handleClear}>Clear</button>
                <button type="" className="btn btn-primary" style={buttonMarginLeft}
                onClick={handleSave}>Save</button>
                <button type="" className="btn btn-info" style={buttonMarginLeft}
                onClick={handleNextQuestion}>Next</button>
            </div>
        </>
    )
}

export default QuizQuestion;