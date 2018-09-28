import React, { Component } from "react";

import Container from "../Container";
import FightBtn from ".././FightBtn";
import CharModel from ".././CharModel";
import QuestionBox from ".././QuestionBox";
import Timer from ".././Timer";

import API from "../../utils/API";

class FightPage extends Component {


  render() {
    return (

      <Container>
        <Timer />
      </Container>
    );
  }
}

export default FightPage;