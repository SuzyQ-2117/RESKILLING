import CounterDisplay from "../components/CounterDisplay";
import DecrementButton from "../components/DecrementButton";
import IncrementButton from "../components/IncrementButton";
import ResetButton from "../components/ResetButton";
import { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1) 
    }

    function handleDecrement() {
        setCount(count - 1)
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div>
            <CounterDisplay count={count}/>
            <div className="flex">
                <IncrementButton increment={handleIncrement}/>
                <DecrementButton decrement={handleDecrement}/>
            </div>
            <ResetButton reset={handleReset}/>
        </div>
    )
}

export default Home;