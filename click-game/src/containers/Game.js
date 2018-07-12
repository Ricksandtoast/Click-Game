import React, {Component} from "react";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import GameCards from "../components/GameCards";

//import UI

import{Grid} from "semantic-ui-react";
import friendData from "../data/friendData";

//Where we definie state and game logic

//import friendData from "../data/friendData";

class Game extends Component{
  state = {
    friendData:friendData,
    score:0,
    topScore:0
  }

  componentDidMount(){
    this.setState({
      friendData: this.shuffleFriends(this.state.friendData)
    })
  }

  shuffleFriends = friendData => {
    const shuffledFriendsList = friendData.sort((a,b)=>(0.5 - Math.random()))
    return shuffledFriendsList;
  }
  render(){
    return(
      <Grid centered>
     <TopBar score = {this.state.score} topScore = {this.state.topScore}/>
        <TopBar/>
        <Hero/>
        <GameCards friendData = {this.state.friendData}/>
        </Grid>
    )
  }
}

export default Game;