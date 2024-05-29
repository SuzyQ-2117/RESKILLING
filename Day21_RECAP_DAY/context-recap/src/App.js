import './App.css';
import ThemedComponent from './components/ThemedComponent';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>      
    </div>
  );
}

export default App;
