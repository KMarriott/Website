import React, { Component } from 'react';
import '../hover.css'
import './Home.css'

class Home extends Component {



  render() {
    let data = this.props

    let showHome = this.props.showHome
    let egglist = this.props.egglist
    let selectEgg = this.props.selectEgg

    for (let egg of egglist) {
      egg.image
    }

    return (
      <div className="Eggs">
      {showHome(data)}

      </div>
      );
  }
}

export default Home;
