//using this hook, we not gain access to consume the theme context (everything within the file)
//we passed theme and toggleTheme functions to the ThemeContext.Provider
import { useTheme } from '../context/ThemeContext'

const ThemedComponent = () => {
    //where the toggle comes from 
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff'}}>
            <p>Current Theme: {theme}</p>
            {/* we've not defined what the toggleTheme function does in this component - we did in the ThemeContext, so we don't need to define it again */}
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ThemedComponent;