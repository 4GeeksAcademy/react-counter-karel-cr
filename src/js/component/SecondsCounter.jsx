import React, { useState, useEffect } from "react";

const SecondsCounter = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds === 9 ? 0 : prevSeconds + 1));
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className="card m-2 text-white bg-dark" >
      
        <div className="card-body">
            <h1 className="card-title">{seconds.toLocaleString()}</h1>
        </div>
        
    </div>
  );
};

export default SecondsCounter;
