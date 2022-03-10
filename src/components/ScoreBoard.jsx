import './buttonStyle.css';
const ScoreBoard = ({result}) => {
    const scoreColor = {
        textAlign: "center",
        color: "rebeccapurple",
        borderBottom: "3px dotted black"
    }
    return(
        <>
            <h4 style={scoreColor}>Score Card</h4>
            <div>
                {result.attempt && <div className="flex-container">
                    <div>{result.score}<h5 style={{color:"green"}}>Score</h5></div>
                    <div>{result.attempt}<h5 style={{color:"brown"}}>Questions</h5></div>
                    <div>{result.wrong}<h5 style={{color:"red"}}>Wrong</h5></div>
                </div>}
                <h5 style={{color:"darkmagenta"}}>Total Percentage: {result.percent} %</h5>
                <h5 style={{color:"green", fontweigth:"bold"}}>Total Score: {result.score}</h5>
                <h5 style={{color: "brown"}}>Attempt Questions: {result.attempt}</h5>
                <h6 style={{color: "red"}}>Worng: {result.wrong}</h6>
            </div>
        </>
    )
}

export default ScoreBoard;