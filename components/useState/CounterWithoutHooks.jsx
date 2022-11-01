import React, { Component } from "react";
import MarkdownGenerator from "../MarkdownGenerator";

export default class CounterWithoutHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () =>
    this.setState((prevState) => ({ count: prevState.count + 1 }));

  decrement = () =>
    this.setState((prevState) => ({ count: prevState.count - 1 }));

  render() {
    return (
      <div className="p-4">
        <h1 className="text-[1.2rem] mb-2">1. Counter without using Hooks</h1>
        <p>Code:</p>
        <MarkdownGenerator markdown={"CounterWithoutHooks.md"} />
        <p>Result:</p>
        <p className="text-center">
          <button
            className="border border-black p-2 mr-2"
            onClick={this.decrement}
          >
            -
          </button>
          {this.state.count}
          <button
            className="border border-black p-2 ml-2"
            onClick={this.increment}
          >
            +
          </button>
        </p>
      </div>
    );
  }
}
