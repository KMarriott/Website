import React, { Component } from 'react';
import '../hover.css'
import './Home.css'

class Monster extends Component {

  render() {

    // let animation = {current_animation: "idle"}
    // let poop = false
    let monster = this.props.state.user_monsters[0]
    let feed = this.props.feed
    let clean_up = this.props.clean_up
    let train = this.props.train
    let rest = this.props.rest

    console.log(monster)

    console.log(this.state)

    return <div className="monster">
    <div> Name </div>
    <div className="monster_name"> {monster.species} </div>
    <div className="monster_item">
    <div> Age {monster.age} </div>
    <div> Love {monster.love} </div>
    </div>
    <div className="image_container">
    <img src={monster.image} />
    </div>

    <div className="button_container">
    <div className="button hvr-box-shadow-inset noselect" onClick={(e) => feed(e, monster)}> Feed </div>
    <div className="button hvr-box-shadow-inset noselect" onClick={(e) => clean_up(e, monster)}> Clean Up </div>
    <div className="button hvr-box-shadow-inset noselect" onClick={(e) => train(e, monster)}> Train </div>
    <div className="button hvr-box-shadow-inset noselect" onClick={(e) => rest(e, monster)}> Rest </div>
    </div>

    <div className="monster_item">
    <div> Health<br/>{monster.health} </div>
    <div> Energy<br/>{monster.energy} </div>
    <div> Strength<br/>{monster.strength} </div>
    <div> Hunger<br/>{monster.hunger} </div>
    <div> Hygiene<br/>{monster.hygine} </div>
    </div>
    </div>



  }
}

export default Monster;
