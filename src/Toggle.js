import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () =>
    this.setState({
      on: !this.state.on
    });
  render() {
    return (
      <div>
        {this.state.on && <h1> Toggle this! </h1>}
        <button onClick={this.toggle}>Toggle Me</button>
      </div>
    );
  }
}
