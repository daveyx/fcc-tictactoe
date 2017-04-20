'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PlayGround from './playGround';
import PlayerSelection from './playerSelection'

const initialGameState = {
  sqr1: "",
  sqr2: "",
  sqr3: "",
  sqr4: "",
  sqr5: "",
  sqr6: "",
  sqr7: "",
  sqr8: "",
  sqr9: ""
}
export default class TicTacToe extends Component {
  constructor(props) {
    super();
    this.state = {
      userPlayer: "X",
      gameState: initialGameState
    };
    this.selectPlayer = this.selectPlayer.bind(this);
    this.setField = this.setField.bind(this);
  }

  selectPlayer(val) {
    this.setState({userPlayer: val});
  }

  setField(val) {
    const newGameState = Object.assign({}, this.state.gameState);
    newGameState[val] = this.state.userPlayer;
    this.setState({
      gameState: newGameState
    });
  }

  render() {
    return(
      <div className="text-center">
        { ! this.state.userPlayer
           ? <PlayerSelection clickHandler={this.selectPlayer} />
           : <PlayGround clickHandler={this.setField} gameState={this.state.gameState} />
        }
      </div>
    );
  }
}
