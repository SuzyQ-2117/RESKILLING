// functions generally want to be named the same as the component name. The components will all go into app.js to be rendered

const FirstComponent = () => {
    return(
        <div className="content">
            <h1>Suzy</h1>
            <p>Random fact about me: I have a degree in Musical Theatre</p>
        </div>
    );
}

// you always want to export your component so that it can be used in app.js
export default FirstComponent;