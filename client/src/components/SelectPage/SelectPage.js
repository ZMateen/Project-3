//character select page

import React, { Component } from "react";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

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
        <Grid>
        <Row>
        {this.state.chars.map(char => (
          <Col md={4}>
          <CharBox
            id={char.id}
            key={char.id}
            image={char.image}
          />
          </Col>    
        ))}

        </Row>
        </Grid>

        <ResetBtn />

        <Grid>

          <Row>

        {this.state.stages.map(stage => (
          <Col md={4}>
          <StageBox
            id={stage.id}
            key={stage.id}
            image={stage.image}
          />
          </Col>
        ))}

        </Row>

        </Grid>

        <FightBtn />

      </Container>
      
    );
  }
}

export default SelectPage;

