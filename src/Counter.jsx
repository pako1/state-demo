import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count + 1); //by using the variable count if we want to update it multiple times it's not gonna work. In order
    //setCount offers us the current value already and we should use this instead. the count is only for read purposes.
    //setCount(count +1 ) X
    //setCount((currentCount)=> currentCount+1). It works like composables
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Increase</button>
        </div>
    );
}