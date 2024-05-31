import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div class=" navbar">
            <div>
              <div class="">SuzyQ's Page</div>
            </div>
            <div class="">
                <ul class="list flex">
                    <li class="list-item">Home</li>
                    <li class="list-item">About</li>
                    <li class="list-item">To-Do List</li>
                    <li class="list-item">Contact</li>
                </ul>
            </div>
        </div>
        <main>
          <ul>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
          </ul>
        </main>
    </div>
  );
}

export default App;
