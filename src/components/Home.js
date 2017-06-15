import React, { Component } from 'react';
import '../hover.css'
import './Home.css'

import Monster from "./Monster"

import monsterlist from './monsterlist';
import egglist from './egglist';

class Home extends Component {

  constructor(){
    super();

    this.selectEgg = this.selectEgg.bind(this)
    // this.feed = this.feed.bind(this)
    // this.clean_up = this.clean_up.bind(this)
    // this.train = this.train.bind(this)
    // this.rest = this.rest.bind(this)
    this.showHome = this.showHome.bind(this)
    

    this.state = {
      egg: true,
      monster_id: null,
      monsterlist: monsterlist,
      new_monster: null,
      user_monsters: [],
      currentCount: 0
    };
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


  showHome(){
    let selectEgg = this.selectEgg
    let state = this.state
    if(this.state.egg === true){
      return egglist.map(function(egg){
        return  <div className="hvr-grow"> 
        <div onClick={(e) => selectEgg(e, egg)}><img src={egg.image} />
        </div>
        </div>
      })
    }
    else{

    let user_monsters = this.user_monsters
      return this.state.user_monsters.map(function(monster){
        return <div>
        
          <Monster user_monsters={state.user_monsters} name="ok"/>
        
        </div>
      })
    }
  }



  render() {


    this.selectEgg = this.selectEgg.bind(this)
    this.showHome = this.showHome.bind(this)
    // let data = this.props

    // let egglist = this.egglist

    // for (let egg of egglist) {
    //   egg.image
    // }
    console.log(this.showHome)
    return (
      <div className="Eggs">
      {this.showHome()}
      <br/>
      {this.state.egg ? ("Pick an Egg!") : " "}

      </div>
      );
  }
}

export default Home;
