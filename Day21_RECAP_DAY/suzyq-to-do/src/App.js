import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import ShowTasks from './pages/TaskList';
;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/list' element={<ShowTasks />} />
          <Route path='/add' element={<AddTaskPage />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p class="footer float-left">Made by: SuzyQ</p>
        <p class="footer float-right">Last updated: 23:45 <span class="small-text">(that's way past my bedtime!)</span></p>
      </footer>
    </div>
  );
}

export default App;
