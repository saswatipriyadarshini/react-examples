import React, { Component } from 'react';
import '../../App.css';
import { toDo } from './action.js';

class Action extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={this.toDo} className="App-title">Welcome to React</h1>
        </header>

      </div>
    );
  }
}

export default Action;
