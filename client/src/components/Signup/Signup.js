import React from "react";
import './Signup.css';


class Signup extends React.Component {

  state = {
    name: [],
    email: "",
    username: "",
    password: ""
  };

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.username && this.state.password) {
      API.handleSubmit({
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
        .then(res => this.handleSubmit())
        .catch(err => console.log(err));
    }
  };

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
