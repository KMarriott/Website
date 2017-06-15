import React, { Component } from 'react';
import '../hover.css'
import './Home.css'



import monsterlist from './monsterlist';
import egglist from './egglist';

class Monster extends Component {

 constructor(){

    super();
    // this.selectEgg = this.selectEgg.bind(this)
    this.feed = this.feed.bind(this)
    this.clean_up = this.clean_up.bind(this)
    this.train = this.train.bind(this)
    this.rest = this.rest.bind(this)
    // this.showHome = this.showHome.bind(this)

    this.state = {
        // egg: true,
        // monster_id: null,
        // selectEgg: this.selectEgg,
        monsterlist: monsterlist,
        currentCount: 0
    }
}

componentDidMount() {

    
    this.setState({user_monsters: this.props.user_monsters})
    this.intervalId = setInterval(this.timer.bind(this), 1000);
}

componentWillUnmount(){
    clearInterval(this.intervalId);
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

timer() {
    console.log("count")
    let updated_monsters=this.state.user_monsters
    let decreaseStat = this.decreaseStat
    updated_monsters = this.decreaseStat(updated_monsters, "health", 1)
    updated_monsters = this.decreaseStat(updated_monsters, "energy", 1)
    updated_monsters = this.increaseStat(updated_monsters, "hunger", 1)
    updated_monsters = this.decreaseStat(updated_monsters, "hygine", 1)
    // console.log(updated_monsters)
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


        // console.log(this.state.currentCount)

        // if(this.state.currentCount < 1) { 
        //  clearInterval(this.intervalId);
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


render() {

    // let animation = {current_animation: "idle"}
    // let poop = false
    console.log(this.props.user_monsters[0])
    let monster = this.props.user_monsters[0]
    let feed = this.feed
    let clean_up = this.clean_up
    let train = this.train
    let rest = this.rest

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
