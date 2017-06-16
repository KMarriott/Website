"use strict";



//Baby I
let babyI = [{
	id: 0,
	species: "Botamon",
	stage: 0,
	image: "https://wikimon.net/images/2/26/Botamon_vpet_dm.gif",
	evolution: {default: "Koromon"}
}]

//Baby II
let babyII = [{
	id: 1,
	species: "Koromon",
	stage: 1,
	image: "https://wikimon.net/images/6/68/Koromon_vpet_dm.gif",
	evolution: {
		default: "Agumon",
		second: "Betamon"
	}
}]

//Child


let child = [{
	id: 2,
	species: "Agumon",
	stage: 2,
	image: "https://wikimon.net/images/e/ee/Agumon_vpet_dm.gif",
	evolution: {
		default: "Greymon",
		normL: "Airdramon",
		normM: "Tyranomon",
		normH: "Meramon",
		evil:"Devimon",
		bad:"Numemon"
	}
},
{
	id: 3,
	species: "Betamon",
	stage: 2,
	image: "https://wikimon.net/images/6/65/Betamon_vpet_dm.gif",
	evolution: {
		default: "Seadramon",
		normL: "Airdramon",
		normM: "Tyrannomon",
		normH: "Meramon",
		evil:"Devimon",
		bad:"Numemon"
	}
}]

//Adult
let adult = [{
	id: 4,
	species: "Greymon",
	stage: 3,
	image: "https://wikimon.net/images/2/27/Greymon_vpet_dm.gif",
	evolution: {
		default: "MetalGreymon"
	}
},

{
	id:"Devimon",
	species: "Devimon",
	stage: 3,
	image: "https://wikimon.net/images/7/74/Devimon_vpet_pen.gif",
	evolution: {default: "Myotismon"}
},
{
	id: "Airdramon",
	species: "Airdramon",
	stage: 3,
	image: "https://wikimon.net/images/c/c2/Airdramon_vpet_dm.gif",
	evolution: {default: "Megadramon"}
},
{
	id: "Tyrannomon",
	species: "Tyranomon",
	stage: 3,
	image: "https://wikimon.net/images/e/ea/Tyranomon_vpet_dm.gif",
	evolution: {default: 'Metal Tyrannomon'}
},
{
	id: "Meramon",
	species: "Meramon",
	stage: 3,
	image: "https://wikimon.net/images/5/57/Meramon_vpet_pen.gif",
	evolution: {default:'DeathMeramon'}
},
{
	id:"Numemon",
	species: "Numemon",
	stage: 3,
	image: "https://wikimon.net/images/7/78/Numemon_vpet_dvic.gif",
	evolution: {default: "Monzaemon"}
},
{
	id: "Seadramon",
	species: "Seadramon",
	stage: 3,
	image: "https://wikimon.net/images/c/cb/Seadramon_vpet_pen.gif",
	evolution: {default: "Metal Seadramon"}
}]
//Perfect

let perfect = [{
	id: 4,
	species: "MetalGreymon",
	stage: 4,
	image: "https://wikimon.net/images/1/18/Metalgreymon_vpet_pen.gif",
	evolution: {default: "WarGreymon"}
},
{
	id: 13,
	species: "Mamemon",
	stage: 4,
	image: "https://wikimon.net/images/2/20/Mamemon_vpet_dm.gif",
	evolution: {default: "None"}
},
{
	id: "Monzaemon",
	species: "Monzaemon",
	stage: 4,
	image: "https://wikimon.net/images/e/e5/Monzaemon_vpet_dm.gif",
	evolution: {default: "None"}
},
{
	id:'DeathMeramon',
	species: "DeathMeramon",
	stage: 4,
	image: "https://wikimon.net/images/6/6d/Deathmeramon_vpet_pen.gif",
	evolution: {default: "None"}
},
{
	id: "Myotismon",
	species: "Myotismon",
	stage: 4,
	image: "https://wikimon.net/images/f/f0/Vamdemon_vpet_pen.gif",
	evolution: {default: "None"}
},
{
	id: "Metal Seadramon",
	species: "Mega Seadramon",
	stage: 4,
	image: "https://wikimon.net/images/9/9a/Megaseadramon_vpet_pen.gif",
	evolution: {default: "None"}
},
{
	id: 'Metal Tyrannomon',
	species: "Metal Tyranomon",
	stage: 4,
	image: "https://wikimon.net/images/f/f2/Metaltyranomon_vpet_dm.gif",
	evolution: {default: "None"}
},
{
	id: "Megadramon",
	species: "Megadramon",
	stage: 4,
	image: "https://wikimon.net/images/f/f3/Megadramon_vpet_dm.gif",
	evolution: {default: "None"}
}]

//Ultimate
let ultimate = [{
	id: "WarGreymon",
	species: "WarGreymon",
	stage: 5,
	image: "https://wikimon.net/images/0/04/Wargreymon_vpet_20th.gif",
	evolution: {default: "None"}
}]

let dead = [{
	id: 0,
	species: "Dead",
	stage: 0,
	image: "http://i.imgur.com/wPkyvgE.png",
	evolution: {default: "Dead"}
}]



let monsterlist = []
let stagelist = [dead, babyI, babyII, child, adult, perfect, ultimate]


//puts everything into monsterlist to export
stagelist.forEach(
	stage => stage.forEach(
		digimon => monsterlist.push(digimon)
		)
	)
 

console.log(monsterlist)


export default monsterlist;