import React from "react";

function ClickCapture(){
    const handleClickCapture = () => {
        alert("Click captured!");
    }
    return (
        <div>
            <h1>onClickCapture</h1>
            <button onClickCapture={handleClickCapture}>Click Me</button>
        </div>
    )
}
export default ClickCapture;