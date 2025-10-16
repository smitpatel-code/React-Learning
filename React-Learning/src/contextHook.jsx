import React, { use } from "react";
const themeContext = React.createContext();
function ContextHook() {
    const [theme, setTheme]=React.useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <themeContext.Provider value={theme}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>

        </themeContext.Provider>

    )
}
export default ContextHook;
