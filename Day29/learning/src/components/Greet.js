import React, { Component } from "react";

class Greet extends Component {
  render() {
    return (
      <div>
        <h3>welcome {this.props.name}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Greet;
