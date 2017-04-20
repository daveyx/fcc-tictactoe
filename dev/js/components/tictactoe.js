'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayGround from './playGround';
import PlayerSelection from './playerSelection'

export default class TicTacToe extends Component {
  constructor(props) {
    super();
    this.state = {
      userPlayer: "X"
    };
    this.selectPlayer = this.selectPlayer.bind(this);
    this.setField = this.setField.bind(this);
  }

  selectPlayer(val) {
    this.setState({userPlayer: val});
  }

  setField(val) {
  }

  render() {
    return(
      <div className="text-center">
        { ! this.state.userPlayer ? <PlayerSelection clickHandler={this.selectPlayer} /> : <PlayGround clickHandler={this.setField} />}
      </div>
    );
  }
}
