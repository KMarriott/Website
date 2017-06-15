import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';


//This can be replaced with API once it
import monsterlist from './components/monsterlist';


class App extends Component {
	constructor(){
		super();

		

		this.state = {
			egg: true,
			monster_id: null,
			selectEgg: this.selectEgg,
			monsterlist: monsterlist,
			user_monsters: [],
			currentCount: 0
		};
	}

	onBackButtonEvent(e){
		console.log("hi")
		e.preventDefault();
		window.history.back();
	}


	render() {







		return (
			<div className="App">
			<div className="Back" onClick={this.onBackButtonEvent}>{"<--"} Back </div>
			Your Virtual Pet

			<Home/>
			</div>
			);
	}
}

export default App;
