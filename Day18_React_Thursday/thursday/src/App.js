import './App.css';
// import ItemCard from './components/items';
// import itemsData from './itemsData.json'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'
import GoodbyePage from './pages/GoodbyePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/goodbye' element={<GoodbyePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <h1>Unicode Characters</h1> */}
{/* <div className="items-grid">
          {itemsData.map((item) => (
            <ItemCard
              key={item.key} 
              symbol={item.symbol} 
              name={item.name} 
              unicodeVal={item.UnicodeVal} 
            />
          ))}
        </div> */}