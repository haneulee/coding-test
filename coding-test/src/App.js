import React, { Component } from "react";

const solution = (data, context) => {
  var origin = JSON.parse(data),
    result = null,
    min = 0,
    current,
    i,
    len,
    A;

  A = origin
    .filter(function(current) {
      return current >= 0;
    })
    .sort(function(a, b) {
      return a - b;
    });

  len = A.length;

  for (i = 0; i < len; i++) {
    current = A[i];

    if (current - min > 1) {
      if (origin.length !== len) {
        break;
      }

      min = current;
    }

    if (current - min === 1) {
      min = current;
    }
  }

  context.setState({ result: min + 1 });
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
        {"put here any array : "}
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
