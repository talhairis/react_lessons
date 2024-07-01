import React, {useState} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);//update function
        setCount(c => c + 1);//We can use "c" or "prevCount" for this variable.
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(c => c = 0);//This update function is not nessessory because we don't need previous value.
    }

    return( <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increment}>Increment</button>
            </div>);
}

export default MyComponent