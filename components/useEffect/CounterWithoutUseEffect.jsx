import React, { Component } from "react";
import MarkdownGenerator from "../MarkdownGenerator";

export default class UseEffectClasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      calculation: 0,
    };
  }

  componentDidMount() {
    console.log("mount");
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    // Typical usage (don't forget to compare props):
    if (this.props.count !== prevProps.userID) {
      console.log("hi");
    }
  }

  render() {
    return (
      <div className="p-4">
        <h1 className="text-[1.2rem]  mb-2">1. UseEffect example</h1>
        <p>Code:</p>
        <MarkdownGenerator markdown={"CounterWithUseEffect.md"} />
        <p>Result:</p>
        <div>
          <p className="border border-black p-4">
            count + 1 = {this.state.count}
          </p>
          <p className="border border-black mt-2 p-4">
            count x 2 = {this.state.calculation}
          </p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="border border-black p-2 mt-4"
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}
