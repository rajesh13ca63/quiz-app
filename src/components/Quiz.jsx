import QuizQuestion from "./QuizQuestion";

const Quiz = ({questions}) => {

        return(
            <>
                {questions.map(question => {
                    return ( <QuizQuestion key={question.questionId} question={question}/> )
                })}
                <div>

                </div>
            </>
        )
}

export default Quiz;