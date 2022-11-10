import React, { Component } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

class ClassComponent extends Component {
  constructor() {
    super();

    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      value: 0
    }
  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

  increase = () => {
    return this.setState({...this.state, value: this.state.value + 1});
  }

  decrease = () => {
    return this.setState({...this.state, value: this.state.value - 1});
  }


  render() {
    return (
      <p>
        <FaPlusCircle onClick={this.increase} />
        <span>{this.state.value}</span>
        <FaMinusCircle onClick={this.decrease} />
      </p>
    );
  }
}

export default ClassComponent;
