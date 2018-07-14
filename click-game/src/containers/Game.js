import React, {Component} from "react";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import GameCards from "../components/GameCards";

//import UI

import{Grid} from "semantic-ui-react";
import friendData from "../data/friendData.json";

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
    const shuffledFriendsList = friendData.sort((a,b) => (0.5 - Math.random()))
    return shuffledFriendsList;
  }

  handleCardClick = id => {
    //set flag
    let guessedCorrectly = false;
    //based on current friendlist in state
    const newFriendList = this.state.friendData.map(friend =>{
      // if Id is the same 
      if(friend.id === id){
        //if not the same
        if(!friend.clicked){
          friend.clicked = true;
          guessedCorrectly = true;
        }
      }
      return friend;
    });

  //tirnary ternary tarnary tarnation ary operator
  (guessedCorrectly) ? this.handleCorrectGuess(newFriendList) 
  :
  this.handleIncorrectGuess(newFriendList)
  }

  handleCorrectGuess = newFriendList => {
    //destructure score and topScore
    const {score, topScore} = this.state;
    //creates new scoere
    const newScore = score +1;

    const newTopScore = 
    (newScore > topScore) ? newScore : topScore;

    this.setState({
      friendData: this.shuffleFriends(newFriendList),
      topScore: newTopScore,
      score : newScore 
    });
  }
  handleIncorrectGuess = newFriendList =>{
    const resetFriendList = newFriendList.map(friend=>{
      //set clicked property to false. Not sure where clicked is initialized
      friend.clicked = false;
      return friend;
    })
    //const {score,topScore} = this.state;
    this.setState({
      frienddate: this.shuffleFriends(resetFriendList),
      score:0
    });

    //const newScore = 0;
  }
  render(){
    return(
      <Grid centered>
     <TopBar score = {this.state.score} 
     topScore = {this.state.topScore}
     />
        <TopBar/>
        <Hero/>
        <GameCards score = {this.state.score} friendData = {this.state.friendData} handleCardClick ={this.handleCardClick} />
        </Grid>
    )
  }
}

export default Game;