import { useState } from "react";

function WelcomeFC (props) {
    let [counter, setCounter] = useState(0);
    return (
        <>
        <h3>Hello from Function Component, {props.title}. {props.name} - Your age is {props.age}</h3>
        <h5>The Counter From the State is {counter}</h5>
        <button onClick={() => setCounter(counter++)}>Increment Counter</button>
        </>
    )
};

export default WelcomeFC; 