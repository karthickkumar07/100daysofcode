import React, { Component } from "react";
import Greet from "./components/Greet";
import "./styles.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Foo from "./components/Foo";
import Mount from "./components/Mount";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Class component</h1>
        <Greet name="karthick">
          <p>smart technology</p>
        </Greet>
        <br />
        <Message />
        <Counter />
        <Form />
        <Foo />
        <Mount />
      </div>
    );
  }
}

export default App;
