import React, { Component } from "react";

import Container from "../Container";
import Headerlogo from ".././Headerlogo";
import Info from ".././Info";
import Login from ".././Login";
import Signup from ".././Signup";

import Navbar from ".././Navbar";
import API from "../../utils/API";

class FrontPage extends Component {


  render() {
    return (

      <Container>
        <Headerlogo></Headerlogo>
        <Info />
      </Container>
    );
  }
}

export default FrontPage;