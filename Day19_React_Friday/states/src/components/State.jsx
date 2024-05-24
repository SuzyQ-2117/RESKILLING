import { useState } from "react";

export default function State() {
    const [temperature, setTemperature] = useState(20)
    const [count, setCount] = useState(1)
    
    function increaseTemperature() {
        setTemperature(temperature+1)
    }
    function decreaseTemperature() {
        setTemperature(temperature-1)
    }
    function double() {
        setCount(count*2)
    }

    return(
        <div>
            <h1>🌡 React Thermostat</h1>
            <h2>{temperature}℃</h2>
            <div>
                <button onClick={increaseTemperature}>+</button>
                <button onClick={decreaseTemperature}>-</button>
            </div>
            <div>
                <h1>Powers of 2</h1>
                <h2>{count.toLocaleString()}</h2>
                <button onClick={double}>x2</button>
            </div>
        </div>
    )
}