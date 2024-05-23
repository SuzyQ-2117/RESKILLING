export default function HomeContent() {
    return (
        <div className="flex">
            <div className="block">
                <div className="divleft centered">
                    <h1 class="green-text left-align headline">Bring your home to life.</h1>
                    <p class="green-text left-align blurb">Elevate your living space with a touch of nature.</p>
                    <p class="green-text left-align blurb">We offer a range of easy-care houseplants.</p>
                    <br/>
                    <input className="button1" type="button" value="Browse plants"></input>
                </div>
            </div>
            <div className="divright">
                <img src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg" width="300px"/>
            </div>
        </div>
    )
}