import { Link } from 'react-router-dom'

export default function HomeContent() {
    return (
        <div className="flex">
            <img src="https://picsum.photos/250"/>
            <div>
                <h2>This is the place I'll be writing a list of things to do!</h2>
                <h4>Blurb: some info can go here about the task list I'm creating and what it will do.</h4>
                <h4>I have a memory like a sieve so if I don't write things down I'll forget them.</h4>
                <div className="flex">
                    <button>
                        <Link to='/list'>Task List</Link>
                    </button>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}