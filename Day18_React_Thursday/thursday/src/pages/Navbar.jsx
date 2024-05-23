import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <h1>Demo Site</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/goodbye">Goodbye</Link>
                </li>
            </ul>
        </nav>
    )
}