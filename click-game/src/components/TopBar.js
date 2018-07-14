import React from "react";
import {Grid,Header} from "semantic-ui-react";

const styles = {
  fontSize: "30px"
}
const TopBar = props => (
  <Grid.Row
  as = "div"
  color = {"purple"}
  centered
  columns = {4}
  verticlealign = {"middle"}
  >
  <Grid.Column textalign = {"center"}>
  <Header style = {styles} inverted  as ={"h2"} textAlign = {"center"}>
    Rick and Morty Game!
  </Header>
  </Grid.Column>

   <Grid.Column textalign = {"center"}>
  <Header style = {styles} inverted  as ={"h2"} size = {"huge"} textAlign = {'center'}>
    {props.score ? ("You guessed correctly!"): ("Click to start the game")}
  </Header>
  </Grid.Column>

   <Grid.Column textalign = {"center"}>
  <Header style = {styles} inverted  as ={"h2"} textAlign = {"center"}>
    Current score: {props.score} | Top Score: {props.topScore}
  </Header>
  
  </Grid.Column>
  </Grid.Row>
);

export default TopBar;