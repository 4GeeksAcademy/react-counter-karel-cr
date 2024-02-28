import React from "react";

const ClearButton = ({clearCounter}) => {

    return(
        <button type="button" className="btn btn-warning" onClick={clearCounter}>Limpiar</button>
    )
}

export default ClearButton;