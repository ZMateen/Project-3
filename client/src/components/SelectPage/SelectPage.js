//character select page

import React, { Component } from "react";

import Container from "../Container";
import FightBtn from ".././FightBtn";
import CharBox from ".././CharBox";
import StageBox from ".././StageBox";
import ResetBtn from ".././ResetBtn";

import chars from "./chars.json";
import stages from "./stages.json";

import Navbar from ".././Navbar";
import API from "../../utils/API";

class SelectPage extends Component {

    state = {
        chars,
        stages
      };

  render() {
    return (

      <Container>
        {this.state.chars.map(char => (
          <CharBox
            id={char.id}
            key={char.id}
            image={char.image}
          />
        ))}

        <ResetBtn />

        {this.state.stages.map(stage => (
          <StageBox
            id={stage.id}
            key={stage.id}
            image={stage.image}
          />
        ))}

        <FightBtn />

      </Container>
    );
  }
}

export default SelectPage;
