import React from 'react';
const myContext=React.createContext();
 function FirstExample(){
    const[state,setState]=React.useState("Hello");
    return(
        <myContext.Provider value={state}>
            <ChildComponent />
        </myContext.Provider>
    )
    function ChildComponent(){
        const contextValue=React.useContext(myContext);
        return <h1>{contextValue}</h1>
    }
 }
 

 const themeContext=React.createContext();
 function ThemeProvider({children}){
    const[theme, setTheme]=React.useState("light");
    const toggleTheme=()=>{
        setTheme((prevTheme)=> (prevTheme==="light" ? "dark" : "light"));
    };
    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    );
 }
    function ThemedComponent(){
        const {theme, toggleTheme}=React.useContext(themeContext);
        return (
            <div style={{background: theme==="light" ? "#fff" : "#333", color: theme==="light" ? "#000" : "#fff", padding: "20px"}}>
                <p>Current Theme: {theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        );
    }
    function ExampleSecond(){
        return(
            <ThemeProvider>
                <ThemedComponent />
            </ThemeProvider>
        )
    }
 function Example(){
    return (
        <ExampleSecond />
    )
 }
 export default Example;