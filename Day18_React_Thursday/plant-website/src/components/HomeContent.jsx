import { Link } from 'react-router-dom'

export default function HomeContent() {
    return (
        <div className="flex wrap">
            <div className="block">
                <div className="divleft centered">
                    <h1 className="green-text left-align headline">Bring your home to life.</h1>
                    <p className="green-text left-align blurb">Elevate your living space with a touch of nature.</p>
                    <p className="green-text left-align blurb">We offer a range of easy-care houseplants.</p>
                    <br/>
                    <Link to='/shop'><button className="button1">Browse plants</button></Link>
                </div>
            </div>
            <div className="divright">
                <img src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg" width="300px"/>
            </div>
        </div>
    )
}