import { useState, useEffect } from "react";
export default function CounterEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
    useEffect(function myEffect() { console.log("Effect was called") }, [count]); //Wheneve the count changes only then trigger the effect

    const increment = () => {
        setCount(currentCount => currentCount + 1);
    };
    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name is:     {name}</p>
            <input
                type="text"
                value={name}
                onChange={handleChange} />
        </div>
    )
}

//An effect will always run !after! the first render
//An effect will run !after! all re-renders except if we add a condition when it should run 
//An effect takes 2 parameters, 
//1st a callback that will run after a render/re-render 
//2nd an array (we can call it dependency) that contains some states and if those states change only then we trigger the callback 
//useEffect(myCallBack, [userId, passwordId]) if one of those changes then we trigger the callback
//if the array is empty [] then this effect will trigger only the first time


//Good example of Side-effect is :we use it to load initial data from an API on the first render of a component

//if I use a function inside a useState(function(){...}) then this function will be executed only the first time only and not on future renders
//We can put also an async function but it won't work because it returns a promise and it won't work.
//Therefore we need a side-effect for first load.
//Effects are synchronous so we need to put an asynch function inside the function of the callback
//useEffect(async function(){....},[]); won't work 
//Instead do 
//useEffect(()=>{
// async function x(){...}    Y
//x()
//},[]); 
//or just declare an async function outside and just call it in the Y