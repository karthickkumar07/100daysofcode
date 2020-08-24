import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome guys",
    };
  }
  onSubmit() {
    this.setState({
      message: "Thank you for visiting",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onSubmit()}> click here</button>
      </div>
    );
  }
}

export default Message;
