import React, { Component } from 'react';
import Clicker from "./Clicker";
import Header from "./Header";

class ClickOption extends Component{
  constructor() {
    super();

    this.state = {
      title: 'Something else to write'
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Clicker />
        </div>
      </div>
    );
  }
}

export default ClickOption;