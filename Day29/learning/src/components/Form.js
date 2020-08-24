import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  onHandleSubmit(e) {
    e.preventdefault();
    this.setState({
      user: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <h1>Hello {this.state.user}</h1>
        <p>Enter your name:</p>
        <input type="text" name="user" onChange={this.myChangeHandler} />
        <br />
        <br />
        <button onClick={() => this.onHandleSubmit}>submit </button>
      </form>
    );
  }
}

export default Form;
