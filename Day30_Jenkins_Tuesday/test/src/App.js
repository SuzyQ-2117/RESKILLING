import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Tickets from './pages/Tickets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
