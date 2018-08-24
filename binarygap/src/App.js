import React, { Component } from "react";

const solution = (data, context) => {
  var firstPoint = null,
    gap = 0;

  JSON.parse(data)
    .toString(2)
    .split("")
    .forEach((data, index) => {
      if (data === "1") {
        if (firstPoint !== null) {
          if (gap < index - firstPoint - 1) {
            gap = index - firstPoint - 1;
            firstPoint = index;
          }
        }

        firstPoint = index;
      }
    });

  context.setState({ result: gap });
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: "",
      result: 0
    };
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  render() {
    return (
      <div>
        {"put here any number : "}
        <input
          value={this.state.inputVal}
          onChange={e => {
            this.handleChange(e);
          }}
          ref={input => (this.myinput = input)}
        />
        <button
          onClick={() => {
            solution(this.state.inputVal, this);
          }}
        >
          Click!
        </button>
        <div>{"result : " + this.state.result}</div>
      </div>
    );
  }
}

export default App;
