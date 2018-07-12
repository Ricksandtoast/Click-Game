import React from "react";
import {Grid,Header} from "semantic-ui-react";

const Hero = props => (
  <Grid.Row color = {"pink"} verticalAlign = {"middle"} centered textAlign = {"center"}>
    <Grid.Column width = {12} textAlign={"center"} style = {{margin: "50px,0px"}}>
    <Header inverted as = {"h1"} style = {{fontSize:"50px"}}> Click Game! </Header>

    <Header sub inverted style = {{fontSize:"30px"}}> Click on an image to earn points but don't click on any more than once!</Header>
    </Grid.Column>
  </Grid.Row>
);

export default Hero;