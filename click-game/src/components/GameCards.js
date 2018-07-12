import React from "react";
import {Grid, Image} from "semantic-ui-react";
const GameCards = props => (
  <Grid.Row centered>
  <Grid.Column width = {12}>
      <Grid centered equal>
        <Grid.Row>
          {props.friendData.map(friend=>(
            <Grid.Column key = {friend.id} width ={4}>
              <Image src = {friend.Image} bordered spaced />
            </Grid.Column>
          ))
          }
          </Grid.Row>
      </Grid>
  </Grid.Column>
  </Grid.Row>
);

export default GameCards;