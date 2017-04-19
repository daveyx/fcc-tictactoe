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
  }

  render() {
    return(
      <div className="wrapper text-center">
        { ! this.state.userPlayer ? <PlayerSelection /> : <PlayGround />}
      </div>
    );
  }
}
