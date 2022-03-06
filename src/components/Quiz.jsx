import QuizQuestion from "./QuizQuestion";
import QuizContext from "./QuizContext";
import { useContext } from "react";

const Quiz = ({props}) => {
    const questions = useContext(QuizContext);

    return(
        <>
            {/* <QuizContext.Consumer>
                { questions.map(question => {
                    return ( <QuizQuestion key={question.questionId} question={question}/> )
                })}
            </QuizContext.Consumer> */}
            { questions.map(question => {
                return ( <QuizQuestion key={question.questionId} question={question}/> )
            })}
           
        </>
    )
}

export default Quiz;