import logo from './logo.svg';
import './App.css';
import ItemCard from './components/items';
import itemsData from './itemsData.json'

function App() {
  return (
    <div className="App">
      <main>
        <h1>Unicode Characters</h1>
        <div className="items-grid">
          {itemsData.map((item) => (
            <ItemCard
              key={item.key} 
              symbol={item.symbol} 
              name={item.name} 
              unicodeVal={item.UnicodeVal} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
