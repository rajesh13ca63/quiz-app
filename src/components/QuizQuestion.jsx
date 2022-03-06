import { useState } from "react";

const QuizQuestion = ({question}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange =(event) => {
        console.log('option changed called', event.target.value);
        setSelectedOption(event.target.value)
    }

    return(
        <div className="card" style={{width: "28rem", margin: "5px"}}>
            <div className="card-body">
                <h5 className="card-title">{question.question}</h5>
            </div>
            <div className="list-group list-group-flush">
                {question.options.map((option, index) => 
                    // <button type="button" className="list-group-item btn btn-primary">{option}</button>
                    <div className="list-group-item" key={index}>
                        <form>
                            <div className="form-check">
                                <input type="radio" className="form-check-input" 
                                id={question.questionId} value={option} 
                                checked={selectedOption === option}
                                onChange={(e) => handleOptionChange(e)}/>
                                <label className="form-check-label">{option}</label>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuizQuestion;