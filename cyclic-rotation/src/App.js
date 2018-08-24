import React, { Component } from "react";

const solution = (data, K, context) => {
  data = JSON.parse(data);
  if (data && data.length) {
    for (var i = 0; i < K; i++) {
      data.unshift(data.pop());
    }

    context.setState({ result: data });
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: "",
      inputVal2: "",
      result: 0
    };
  }

  handleChange(e, second) {
    if (second) {
      this.setState({ inputVal: e.target.value });
    } else {
      this.setState({ inputVal2: e.target.value });
    }
  }

  render() {
    return (
      <div>
        {"put here any number : "}
        <input
          value={this.state.inputVal}
          onChange={e => {
            this.handleChange(e, true);
          }}
          ref={input => (this.myinput = input)}
        />
        <input
          value={this.state.inputVal2}
          onChange={e => {
            this.handleChange(e);
          }}
          ref={input => (this.myinput = input)}
        />
        <button
          onClick={() => {
            solution(this.state.inputVal, this.state.inputVal2, this);
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
