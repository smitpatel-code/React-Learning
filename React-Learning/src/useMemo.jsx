import React from "react";
import { useMemo } from "react";
 
function UseMemo(){
    const [number, setNumber] = React.useState(0);
    const squaredNumber = useMemo(() => squareNumber(number), [number]);
    const [counter, setCounter] = React.useState(0);

    const onChangeHandler = (event) => {
        setNumber(event.target.value);
    }
    const counterHandler = () => {
        setCounter(counter + 1);
    };
    return(
        <div>
            <h1>UseMemo</h1>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}>

            </input>
            <div>
                OUTPUT: {squaredNumber}
            </div>
            <button onClick={counterHandler}>Counter ++</button>
            <div>
                Counter: {counter}
            </div>

        </div>
    )
    function squareNumber(number){
        console.log("Calculating...");
        return Math.pow(number, 2);
    }

}
export default UseMemo;