import React from "react";
import Card from "../component/Card";
import ClearButton from "./clearButton";
import PauseButton from "./pauseButton";
import RestartButton from "./restartButton";
import ContinueButton from "./continueButton";
import SetButton from "./setAlarm";


const Home = ({ value, clearCounter, pauseButton, restartButton, continueButton, setButton }) => {

	return (
		<div className="container text-center">
			<div className="row card-group justify-content-center mt-3">
				<Card digit=<i className="far fa-clock"></i> />
				<Card digit={(Math.floor(value / 10000)) % 10} />
				<Card digit={(Math.floor(value / 1000)) % 10} />
				<Card digit={(Math.floor(value / 100)) % 10} />
				<Card digit={(Math.floor(value / 10)) % 10} />
				<Card digit={(Math.floor(value / 1)) % 10} /> 
			
			</div>
			<div className="btn-group mt-2" role="group">
				<ClearButton clearCounter={clearCounter} />
				<button type="button" className="btn btn-primary" onClick={pauseButton}>Pausar</button>
				<ContinueButton continueButton={continueButton} />
				<RestartButton restartButton={restartButton} />
			</div>
			<div className="mt-3">
			<SetButton setButton={setButton}/>
			</div>
		</div>
	);
};

export default Home;
