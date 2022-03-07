const ScoreBoard = ({result}) => {
    const scoreColor = {
        textAlign: "center",
        color: "rebeccapurple",
        borderBottom: "3px dotted black"
    }
console.log('result', result);
    return(
        <>
            <h4 style={scoreColor}>Score Card</h4>
            <div>
                <h5 style={{color:"green", fontweigth:"bold"}}>Total Score: {result.score}</h5>
                <h5 style={{color: "brown"}}>Attempt Questions: {result.attempt}</h5>
                <h6 style={{color: "red"}}>Worng: {result.wrong}</h6>
            </div>
        </>
    )
}

export default ScoreBoard;