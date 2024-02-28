import React from "react";

const Card = ({digit}) => {
    return (
        <div className="col-1 text-bg-dark" >
            <h2 className=" fs-1">{digit}</h2>
        </div>
    )
}

export default Card;