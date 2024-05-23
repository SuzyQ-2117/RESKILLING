import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className="green">
                <h2>seed theory</h2>
            </div>
            <div className="drop-shadow">
                <ul className="flex list">
                    <li className="listItem link">
                        <Link to='/' class="green-text">Home</Link>
                    </li>
                    <li className="listItem link">
                        <Link to='/shop' class="green-text">Shop</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}