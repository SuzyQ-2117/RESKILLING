import './App.css';
import { useState, useEffect } from 'react'

const apiUrl = 'https://dog.ceo/api/breeds/image/random'

function App() {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setImageUrl(data.message))
  }, [])

  return (
    <main className="App">
      <h1>Go fetch!</h1>
      <img waidth={300} src={imageUrl} alt='' />
    </main>
  );
}

export default App;
