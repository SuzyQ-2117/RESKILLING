import { Link } from 'react-router-dom'
import '../CSS/HomeContent.css'

function HomeContent() {
    return (
        <div className="home-content flex">
            <img src="https://picsum.photos/300" alt="" className="home-img"/>
            <div>
                <h2 className="home-title">I'm actually SUPER forgetful!</h2>
                <p className="home-blurb">I would forget my head if it wasn't attached to me! </p>
                <p className="home-blurb">I have a memory like a sieve so if I don't write things down I'll forget them.</p>
                <p className="home-blurb">Add your tasks here so you can keep on top of things 😊</p>
                <div className="flex">
                    <button className="button-1">
                        <Link className="link" to='/list'>Task List</Link>
                    </button>
                    <button className="button-1">
                        <Link className="link" to="/add">Add</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;