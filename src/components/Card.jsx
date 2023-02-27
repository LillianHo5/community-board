import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.imagePath} />
            <h3>{props.resource}</h3>
            <p>{props.price}</p>
            <a href={props.buttonLink} target="_blank" class="button">Learn More</a>
        </div>
    )
}

export default Card; 