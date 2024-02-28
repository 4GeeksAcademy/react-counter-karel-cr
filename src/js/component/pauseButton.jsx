import React from "react";

const PauseButton = ({pauseButton}) => {

    return(
        <button type="button" className="btn btn-primary" onClick={pauseButton}>Pausar</button>
    )
}

export default PauseButton;