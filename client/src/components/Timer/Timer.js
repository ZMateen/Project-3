// the timer for the questions for the fight

import React from "react";
import "./Timer.css";

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 10 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds - 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
}

export default Timer;