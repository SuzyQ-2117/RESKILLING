import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToDo from './pages/ToDo';
import Contact from './pages/Contact';
import NoIdea from './pages/NoIdea';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/todo" element={<ToDo/>} />
          <Route path="/noidea" element={<NoIdea/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
