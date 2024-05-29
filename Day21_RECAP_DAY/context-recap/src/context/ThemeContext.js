//Your context will sit at the highest possible level to ensure that everything "underneath" (i.e. the Child components) can access it 

import { createContext, useContext, useState } from 'react'

// Start by creating your global **object** - this makes the context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        //This manages the current theme and toggles between them
        setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        //ThemeContext.Provider is a component to wrap around components to access the context value
        //Pass the value that we want to share throughout the tree using the value={{}} prop
        //This wraps around the children, making the props passed to it available at every component

        //Here, theme and toggleTheme are the values that are passed to the child components
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//This needs to sit outside of the ThemeProvider function because it's a separate function, not part of the other one. 
// uses useContext to "consume" the ThemeContext
const useTheme = () => {
    // what this does is "consume" the information made available by the .Provider and makes it available to all of our sub-tree components
    return useContext(ThemeContext)
}

// this is in curly braces becuse we're exporting two hooks (listing hooks)
export { ThemeProvider, useTheme }