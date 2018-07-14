import React from "react";
import {Grid, Image} from "semantic-ui-react";
import "./GameCard.css";
const GameCards = props => (
  <Grid.Row centered>
  <Grid.Column width = {12}>
      <Grid centered>
        <Grid.Row>
          {props.friendData.map(friend=> (
            <Grid.Column key = {friend.id} width ={4}>
              <Image 
              //if props.incorrect = incorrect then className = "incorrect" else it's nothing
              className ={
                (!props.incorrect) 
                ? "incorrect" 
                :""}
              onClick = {()=>props.handleCardClick(friend.id)} 
              src = {friend.image} bordered spaced />
            </Grid.Column>
          ))
          }
          </Grid.Row>
      </Grid>
  </Grid.Column>
  </Grid.Row>
);

export default GameCards;