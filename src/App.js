import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Monster from './components/Monster';

class App extends Component {
	constructor(){
		super();

		this.selectEgg = this.selectEgg.bind(this)
		this.feed = this.feed.bind(this)
		this.clean_up = this.clean_up.bind(this)
		this.train = this.train.bind(this)
		this.rest = this.rest.bind(this)
		this.showHome = this.showHome.bind(this)
		
		const monsterlist=[
		{
			id: 999,
			species: "Egg",
			stage: 0,
			image: "http://i.imgur.com/wPkyvgE.png",
			evolution: {default: 0}
		},
		{
			id: 0,
			species: "Botamon",
			stage: 0,
			image: "https://wikimon.net/images/2/26/Botamon_vpet_dm.gif",
			evolution: {default: 1}
		},
		{
			id: 1,
			species: "Koromon",
			stage: 1,
			image: "https://wikimon.net/images/6/68/Koromon_vpet_dm.gif",
			evolution: {default: 2,
				second: 6}
			},
			{
				id: 2,
				species: "Agumon",
				stage: 2,
				image: "https://wikimon.net/images/e/ee/Agumon_vpet_dm.gif",
				evolution: {
					default: 3,
					normL: 8,
					normM: 9,
					normH: 10,
					evil: 7,
					bad: 11
				}
			},
			{
				id: 6,
				species: "Betamon",
				stage: 2,
				image: "https://wikimon.net/images/6/65/Betamon_vpet_dm.gif",
				evolution: {
					default: 12,
					normL: 8,
					normM: 9,
					normH: 10,
					evil: 7,
					bad: 11
				}
			},
			{
				id: 3,
				species: "Greymon",
				stage: 3,
				image: "https://wikimon.net/images/2/27/Greymon_vpet_dm.gif",
				evolution: {default: 4}
			},
			{
				id: 7,
				species: "Devimon",
				stage: 3,
				image: "https://wikimon.net/images/7/74/Devimon_vpet_pen.gif",
				evolution: {default: 16}
			},
			{
				id: 8,
				species: "Airdramon",
				stage: 3,
				image: "https://wikimon.net/images/c/c2/Airdramon_vpet_dm.gif",
				evolution: {default: 19}
			},
			{
				id: 9,
				species: "Tyranomon",
				stage: 3,
				image: "https://wikimon.net/images/e/ea/Tyranomon_vpet_dm.gif",
				evolution: {default: 18}
			},
			{
				id: 10,
				species: "Meramon",
				stage: 3,
				image: "https://wikimon.net/images/5/57/Meramon_vpet_pen.gif",
				evolution: {default: 15}
			},
			{
				id: 11,
				species: "Numemon",
				stage: 3,
				image: "https://wikimon.net/images/7/78/Numemon_vpet_dvic.gif",
				evolution: {default: 14}
			},
			{
				id: 12,
				species: "Seadramon",
				stage: 3,
				image: "https://wikimon.net/images/c/cb/Seadramon_vpet_pen.gif",
				evolution: {default: 17}
			},
			{
				id: 4,
				species: "MetalGreymon",
				stage: 4,
				image: "https://wikimon.net/images/1/18/Metalgreymon_vpet_pen.gif",
				evolution: {default: 5}
			},
			{
				id: 13,
				species: "Mamemon",
				stage: 4,
				image: "https://wikimon.net/images/2/20/Mamemon_vpet_dm.gif",
				evolution: {default: "None"}
			},
			{
				id: 14,
				species: "Monzaemon",
				stage: 4,
				image: "https://wikimon.net/images/e/e5/Monzaemon_vpet_dm.gif",
				evolution: {default: "None"}
			},
			{
				id: 15,
				species: "DeathMeramon",
				stage: 4,
				image: "https://wikimon.net/images/6/6d/Deathmeramon_vpet_pen.gif",
				evolution: {default: "None"}
			},
			{
				id: 16,
				species: "Myotismon",
				stage: 4,
				image: "https://wikimon.net/images/f/f0/Vamdemon_vpet_pen.gif",
				evolution: {default: "None"}
			},
			{
				id: 17,
				species: "Mega Seadramon",
				stage: 4,
				image: "https://wikimon.net/images/9/9a/Megaseadramon_vpet_pen.gif",
				evolution: {default: "None"}
			},
			{
				id: 18,
				species: "Metal Tyranomon",
				stage: 4,
				image: "https://wikimon.net/images/f/f2/Metaltyranomon_vpet_dm.gif",
				evolution: {default: "None"}
			},
			{
				id: 19,
				species: "Megadramon",
				stage: 4,
				image: "https://wikimon.net/images/f/f3/Megadramon_vpet_dm.gif",
				evolution: {default: "None"}
			},
			{
				id: 5,
				species: "WarGreymon",
				stage: 5,
				image: "https://wikimon.net/images/0/04/Wargreymon_vpet_20th.gif",
				evolution: {default: "None"}
			},
			]

			this.state={
				egg: true,
				monster_id: null,
				selectEgg: this.selectEgg,
				monsterlist: monsterlist,
				user_monsters: [],
				currentCount: 0
			};
		}


		increaseStat(updated_monsters, stat, amount){

			if(updated_monsters[0][stat]>=0){updated_monsters[0][stat] = updated_monsters[0][stat] + amount
			}


			if(updated_monsters[0][stat]>=100){
				updated_monsters[0][stat]=100
			}

			return updated_monsters
		}

		decreaseStat(updated_monsters, stat, amount){

			if(updated_monsters[0][stat]<=100){updated_monsters[0][stat] = updated_monsters[0][stat] - amount
			}

			if(updated_monsters[0][stat]<=0){
				updated_monsters[0][stat]=0
			}

			return updated_monsters
		}

		feed(e){
			console.log(this)
			let updated_monsters=this.state.user_monsters

			if(updated_monsters[0].hunger > 0){
				updated_monsters = this.decreaseStat(updated_monsters, "hunger", 10)
				updated_monsters = this.increaseStat(updated_monsters, "health", 10)
				updated_monsters = this.increaseStat(updated_monsters, "love", 1)
			}

			this.setState({
				user_monsters: updated_monsters 
			})
		}

		clean_up(e){
			console.log(this)
			let updated_monsters=this.state.user_monsters

			updated_monsters = this.increaseStat(updated_monsters, "hygine", 10)
			if(updated_monsters[0].hygine<100){
				updated_monsters = this.increaseStat(updated_monsters, "love", 1)
			}
			this.setState({
				user_monsters: updated_monsters 
			})
		}

		train(e){
			console.log(this)
			let updated_monsters=this.state.user_monsters

			if(updated_monsters[0].love>0 && updated_monsters[0].energy>0){

				updated_monsters = this.increaseStat(updated_monsters, "strength", 1)
				updated_monsters = this.decreaseStat(updated_monsters, "energy", 10)
				updated_monsters = this.increaseStat(updated_monsters, "hunger", 10)
				updated_monsters = this.decreaseStat(updated_monsters, "love", 1)
			}
			this.setState({
				user_monsters: updated_monsters
			})
		}

		rest(e){
			console.log(this)
			let updated_monsters=this.state.user_monsters

			updated_monsters = this.increaseStat(updated_monsters, "energy", 10)

			updated_monsters = this.increaseStat(updated_monsters, "love", 1)

			this.setState({
				user_monsters: updated_monsters 
			})
		}


		selectEgg(e, egg){
			function filterById(jsonObject, id){
				return jsonObject.filter(function(jsonObject) {
					return (jsonObject['id'] === id);})[0];
			}
			function jsonConcat(o1, o2) {
				for (var key in o2) {
					o1[key] = o2[key];
				}
				return o1;
			}

			e.preventDefault();
			console.log("You clicked")

			let new_monster = filterById(this.state.monsterlist, egg.monster_id)
			new_monster = jsonConcat(new_monster, {name: "",
				age: 0,
				love: 0,
				health: 50,
				energy: 50,
				strength: 0,
				hunger: 50, 
				hygine: 50})


			let user_monsters = this.state.user_monsters
			this.state.user_monsters.push(new_monster)

			this.setState({
				egg: false,
				new_monster: new_monster,
				user_monsters: user_monsters
			})

		}

		timer() {
			console.log("count")
			let updated_monsters=this.state.user_monsters
			let decreaseStat = this.decreaseStat
			updated_monsters = this.decreaseStat(updated_monsters, "health", 1)
			updated_monsters = this.decreaseStat(updated_monsters, "energy", 1)
			updated_monsters = this.increaseStat(updated_monsters, "hunger", 1)
			updated_monsters = this.decreaseStat(updated_monsters, "hygine", 1)
			console.log(updated_monsters)
			// 
			if(updated_monsters[0].hunger === 100||updated_monsters[0].energy===0||updated_monsters[0].hygine===0){
				setTimeout(function(){
					updated_monsters = decreaseStat(updated_monsters, "love", 1)
				}, 3000)
			}

			this.setState({
				user_monsters: updated_monsters,
				currentCount: this.state.currentCount + 1
			})


			if(this.state.currentCount.toString().slice(-1)=="0"){
				this.increaseStat(updated_monsters, "age", 1)
				let age = this.state.user_monsters[0].age
				if(age===5||age===10||age===20||age===30||age===50||age===100){
					this.evolve(updated_monsters)
					
				}
			// clearInterval(this.intervalId);
		}


		console.log(this.state.currentCount)

		// if(this.state.currentCount < 1) { 
		// 	clearInterval(this.intervalId);
		// }

	}

	getEvolution_id(monster){
		function filterById(jsonObject, id){
			return jsonObject.filter(function(jsonObject) {
				return (jsonObject['id'] === id);})[0];
		}

		monster = monster[0]
		let evolve_id = 0
		let evolution = monster.evolution
		let love = monster.love
		let strength = monster.strength

		if(monster.stage===999){
			evolve_id = monster.evolution.default
		}

		if(monster.stage===0){
			evolve_id = monster.evolution.default
		}

		if(monster.stage===1){
			if(monster.love>15)
				evolve_id = monster.evolution.default
			else
				evolve_id = monster.evolution.second
		}

		if(monster.stage===2){
			if(love < 25 && strength < 25)
			{
				evolve_id = evolution.bad
			}
			else if(love > 50 && strength > 10)
			{
				evolve_id = evolution.default
			}
			else if(love > 25 && strength < 15)
			{
				evolve_id = evolution.normL
			}
			else if(love > 25 && strength > 15)
			{
				evolve_id = evolution.normM
			}
			else if(love > 25 && strength > 30)
			{
				evolve_id = evolution.normH
			}
			else if(love < 25 && strength > 30)
			{
				evolve_id = evolution.evil
			}
		}

		if(monster.stage===3){
			evolve_id = evolution.default
			if(monster.age===100){
			evolve_id = 999
			monster.age = 0
		}
		}

		if(monster.stage===4){
			// evolve_id = 0
		}


		
		return evolve_id
	}

	evolve(monster){
		function filterById(jsonObject, id){
			return jsonObject.filter(function(jsonObject) {
				return (jsonObject['id'] === id);})[0];
		}
		let evolve_id=this.getEvolution_id(monster)
		debugger
		console.log(evolve_id)
		if(monster[0].evolution.default === "None"&&monster[0].age!==100){
			console.log("no evolution")
		}
		else{
			console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEE")
			console.log(monster[0].evolution.default)

			let new_monster = filterById(this.state.monsterlist, evolve_id)
			
			console.log(new_monster)
			
			let updated_monsters=this.state.user_monsters
			console.log(updated_monsters[0])
			updated_monsters[0] = Object.assign({}, updated_monsters[0], new_monster)
			debugger
			this.setState({
				user_monsters: updated_monsters 
			})
		}
	}

	componentDidMount() {
		this.intervalId = setInterval(this.timer.bind(this), 1000);
	}
	componentWillUnmount(){
		clearInterval(this.intervalId);
	}

	showHome(props){
		let egglist = props.egglist
		let selectEgg = props.selectEgg
		let feed = this.feed
		let clean_up = this.clean_up
		let train = this.train
		let rest = this.rest
		let state = this.state


		if(props.state.egg === true){
			return egglist.map(function(egg){
				return  <div className="hvr-grow"> 
				<a href="" onClick={(e) => selectEgg(e, egg)}><img src={egg.image} /></a>
				</div>
			})
		}
		else
		{
			return props.state.user_monsters.map(function(monster){
				return <div><Monster state = {state} monster={props.state.user_monsters} feed={feed} clean_up={clean_up} train={train} rest={rest}/>

				</div>
			})
		}

	}


	render() {

		const egglist=[
		{
			color: "Striped",
			image: "http://i.imgur.com/wPkyvgE.png",
			monster_id: 0
		},
		{
			color: "Striped",
			image: "http://i.imgur.com/wPkyvgE.png",
			monster_id: 1
		},
		{
			color: "Striped",
			image: "http://i.imgur.com/wPkyvgE.png",
			monster_id: 2
		}
		]





		return (
			<div className="App">
			
			Your Virtual Pet

			<Home state={this.state} egglist={egglist} selectEgg={this.selectEgg} showHome = {this.showHome}/>
			</div>
			);
	}
}

export default App;