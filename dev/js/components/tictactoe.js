'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayGround from './playGround';
import PlayerSelection from './playerSelection'

export default class TicTacToe extends Component {
  constructor(props) {
    super();
    this.state = {
      userPlayer: ""
    };
    this.selectPlayer = this.selectPlayer.bind(this);
  }

  selectPlayer(val) {
    this.setState({userPlayer: val});
  }

  render() {
    return(
      <div className="wrapper text-center">
        { ! this.state.userPlayer ? <PlayerSelection clickHandler={this.selectPlayer} /> : <PlayGround />}
      </div>
    );
  }
}
