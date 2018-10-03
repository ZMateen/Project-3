import React, { Component } from "react";

import Container from "../Container";
import Headerlogo from ".././Headerlogo";
import Info from ".././Info";
import Login from ".././Login";
import Signup from ".././Signup";
import Navbar from ".././Navbar";
import API from "../../utils/API";
import './FrontPage.css';

class FrontPage extends Component {


  render() {
    return (
      <div className="testing">
      <Container>
        <Headerlogo></Headerlogo>
        <Info />
      </Container>
     </div
    );
  }
}

export default FrontPage;
