import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.imagePath} />
            <h3>{props.resource}</h3>
            <p>{props.price}</p>
            <button>Learn More</button>
        </div>
    )
}

export default Card; 