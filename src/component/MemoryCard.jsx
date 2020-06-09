import React, { Component } from 'react';
import './MemoryCard.css';
import logo from '../../src/dg.png';

class MemoryCard extends Component {
  // static propTypes = {
  //   name: this.propTypes.string,
  //   likes: this.propTypes.number,
  // }
  render() {
    return (
      <div className="MemoryCard" > <img src={logo} alt="logo"></img></div>

    );
  }
}

export default MemoryCard;
