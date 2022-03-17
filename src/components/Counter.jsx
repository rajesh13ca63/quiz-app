import { useReducer, useState } from "react";
const counterStyle = {
    color:"red",
    display: "flex",
    flexDirection:"column",
    justifycontent: "center",
    width:"100%",
    alignItems: "center"

}
function reducer(countr, action) {
    switch(action.type) {
        case 'increment':
            return countr+1;
        case 'decrement':
            return countr-1;
        default:
            return countr;
    }
}

const Counter = () => {
    const initValue = 0;
    const [countr, dispatch] = useReducer(reducer, initValue);

    return(
        <div style={{width:"100%", textAlign:"center"}}>
            <h3>Counter using useReducer hooks</h3>
            <div style={counterStyle}>
                <button type="button" onClick={() => dispatch({type: 'increment'})}>Increment</button>
                <p>Count Value: {countr}</p>
                <button type="button" onClick={()=> dispatch({type: 'decrement'})}>Decremnet</button>
            </div>
        </div>
    )
}

export default Counter;