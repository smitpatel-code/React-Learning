import React from "react";
import { useState } from "react";

function OnDoubleClick(){
    const [theme, setTheme] = useState("light");
    const handleDoubleClick = () => {
      setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
            alert("Theme Changed");
           
        
    }
    return (
        <div  style={{backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", height: "100vh"}}>
            <h1>onDoubleClick Event Handler</h1>
            <button onDoubleClick={handleDoubleClick}>Double Click Me to Change Theme</button>
           
        </div>
    )
}
export default OnDoubleClick;