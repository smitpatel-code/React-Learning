import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function UseEffect() {
    const [count, setCount] = useState(0);
    React.useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Effect ran. Count is:", {count});
        return () => {
            console.log("Cleanup");
            document.title = "React App";
        };
    }, [count]);

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default UseEffect;