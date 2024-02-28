import React from "react";

const SetButton = ({setButton}) => {

    return(
        <button type="button" className="btn btn-info" onClick={setButton}>Fijar alarma</button>
    )
}

export default SetButton;