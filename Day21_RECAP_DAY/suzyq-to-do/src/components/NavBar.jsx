import { Link } from 'react-router-dom'
import '../CSS/NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <h1>SuzyQ's To-Do</h1>
            <div>
                <ul className=" flex list">
                    <li>
                        <Link to='/' className="link">Home</Link>
                    </li>
                    <li>
                        <Link to='/list' className="link">List</Link>
                    </li>
                    <li>
                        <Link to="/add" className="link">Add</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;