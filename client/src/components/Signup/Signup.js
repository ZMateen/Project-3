import React from "react";
import './Signup.css';


class Signup extends React.Component {
    render() {
      return (
        <div id="parent">

        <div className="header">
          Fight With Us!
        </div>
  
        <div className="box">
  
            <div className="input-group">
  
                <label htmlFor="name">Name</label>
  
                <input
                type="text"
                name="name"
                className="register-input"
                placeholder="Type Your Name..."
                onChange={this.handleInputChange}/>
  
            </div>
  
            <div className="input-group">
  
              <label htmlFor="email">Email</label>
  
              <input
              type="text"
              name="email"
              className="email-input"
              placeholder="Email..."
              onChange={this.handleInputChange}/>
            
            </div>
  
            <div className="input-group">
  
              <label htmlFor="username">Username</label>
  
              <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username..."
              onChange={this.handleInputChange}/>
            
            </div>
  
            <div className="input-group">
  
              <label htmlFor="password">Password</label>
  
              <input
              type="password"
              name="password"
              className="pass-input"
              placeholder="Password..."
              onChange={this.handleInputChange}/>
      
            </div>
{/*
            <button
            type="button"
            className="register-btn"
            onClick={this
            .submitRegister
            .bind(this)}>Welcome to the Team!</button>
        */}
            </div>
        </div>
      );
    }
  }

  export default Signup;
