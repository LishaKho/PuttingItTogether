import React, { useState } from "react";

const PersonCard = (props) => {
    const [ count, setCount ] = useState(parseInt(props.age))

    return (
        <div>
            <h1>{ props.lastName },{" "}{ props.firstName } </h1>
            <p> Age: {count}</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={() => setCount(count + 1)}>Birthday Button for {props.firstName}</button>
        </div>
    )
}

export default PersonCard