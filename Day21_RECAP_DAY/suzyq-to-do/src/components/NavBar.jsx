import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <h1>SuzyQ's To-Do</h1>
            <div>
                <ul className=" flex list">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/list'>List</Link>
                    </li>
                    <li>
                        <Link>Add</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}