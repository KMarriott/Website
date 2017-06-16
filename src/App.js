import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';


//This can be replaced with API once it
import monsterlist from './components/digimon';


class App extends Component {
	constructor(){
		super();
	}

	onBackButtonEvent(e){
		console.log("hi")
		e.preventDefault();
		window.history.back();
	}


	render() {

		return (
			<div className="app-container">
			<div className="App">
			<div className="Back" onClick={this.onBackButtonEvent}>{"<--"} Back </div>
			<div className="Title">Your Virtual Pet</div>
			<Home/>
			</div>
			</div>	
			);
	}
}

export default App;
