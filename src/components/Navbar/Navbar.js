import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li><a class="active" href="/">Home</a></li>
      <li><a href="/charSelect">charSelect</a></li>
      <li><a id="profile-signup" href="/SignUp">Sign Up</a></li>
      <li><a id="profile-signin" href="/SignIn">Sign In</a></li>
      <li><a id="profile-view" href="/Profile">Profile</a></li>
    </ul>


  </nav>
);


export default Navbar;