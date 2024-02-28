import React, { useEffect } from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";


import Home from "./component/home.jsx";




let intervalo;
let seconds = 0;

const clearCounter = () => {
    seconds = 0;
}

const pauseButton = () => {
    clearInterval(intervalo);
}

const restartButton = () => {
    clearCounter();
    clearInterval(intervalo);
    secondsFunction();
}

const continueButton = () => {
    clearInterval(intervalo);
    secondsFunction();
}

const setButton = () => {
    let alarmTime = prompt("¿Cuando quieres que te avise? (Por favor, introduce el tiempo en segundos, esto es una Demo.");
    let fixedTime = (parseInt(alarmTime) + 2) * 1000;
    setTimeout(() => {
        window.alert("Ya es la hora");
    }, fixedTime);
    restartButton();
}


const secondsFunction = () => {
    intervalo = setInterval(() => {
        ReactDOM.render(<Home value={seconds} clearCounter={clearCounter} pauseButton={pauseButton} restartButton={restartButton} continueButton={continueButton} setButton={setButton}/>, document.querySelector("#app"));
        seconds++
    }, 1000);
}
   
secondsFunction();