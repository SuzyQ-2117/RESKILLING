import './App.css';
import { useState, useEffect } from 'react';
import AddConfetti from './components/AddConfetti';

function App() {
  const [count, setCount] = useState(0);
  const [isConfettiEnabled, setIsConfettiEnabled] = useState(true)

  useEffect(() => {
    if(isConfettiEnabled) {
      AddConfetti({ text: count.toString() })
    }
  }, [count])

  return (
    <main className="App">
      <h1>Confetti Counter</h1>
      <button onClick={() => setIsConfettiEnabled((prev) => !prev)}>
        Confetti: {isConfettiEnabled ? 'On' : 'Off'}
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount((previous) => previous +1)}>
        +1
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((previous) => previous -1)}>
        -1
      </button>
    </main>
  );
}

export default App;
