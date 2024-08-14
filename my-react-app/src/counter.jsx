import React, {useState} from "react";

function Counter() {
    const styles = {
        color: "hsl(0, 92%, 19%)"
    }
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count != 0) {
            setCount(count - 1);
        }
    }

    const reset = () => {
        setCount(0);
    }

    const increase = () => {
        setCount(count + 1);
    }

    return (
        <div className="counter">

            <p style={count <= 9 ? styles : {}}>{count}</p>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increase}>Increment</button>

        </div>
    )
}

export default Counter
