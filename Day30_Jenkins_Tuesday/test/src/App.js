import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Tickets from './pages/Tickets';
import Help from './pages/Help';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/tickets" element={<Tickets />}>
          </Route>
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
