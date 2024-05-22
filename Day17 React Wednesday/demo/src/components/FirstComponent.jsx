// functions generally want to be named the same as the component name. The components will all go into app.js to be rendered

const FirstComponent = () => {
    // make sure you define your variables ABOVE wherever you use them
    const name = "Suzy"
    const age = 32 
    const favDrink = "coffee"
    
    return(
        <div className="content">
            <h1>Hi! My name is {name}!</h1>
            <h2>I am {age} years old. I will be {age + 1} in October.</h2>
            <h3>I love a {favDrink} in the morning.</h3>
            <p>Random fact about me: I have a degree in Musical Theatre</p>
        </div>
    );
}

// you always want to export your component so that it can be used in app.js
export default FirstComponent;