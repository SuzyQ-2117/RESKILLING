import { useEffect, useState } from "react";

export default function Logging() {
    //variables
    

    //states
    const [count, setCount] = useState(0);
    const [isLoggingOn, setIsLoggingOn] = useState(true)

    //useEffect
    useEffect(() => {
        if(isLoggingOn){
            console.log(count);
        }
    }, [count])

    //any other functions
    

    return (
        <div>
            <h1>Enable/Disable console logging button</h1>
            {/* you don't need to define prev - this can be called anything */}
            <button onClick={() => setIsLoggingOn((prev) => !prev)}>
                Logging:{isLoggingOn ? 'on' : 'off'}
            </button>
            <h2>{count}</h2>
            <button onClick={() => setCount((plusOne) => plusOne +1)}>+1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount((minusOne) => minusOne -1)}>-1</button>
        </div>
    );
}