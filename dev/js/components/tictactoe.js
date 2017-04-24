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
      computerPlayer: "O",
      winner: "",
      gameState: initialGameState
    };
    this.selectPlayer = this.selectPlayer.bind(this);
    this.setField = this.setField.bind(this);
    this.computerMove = this.computerMove.bind(this);
  }

  selectPlayer(val) {
    this.setState({userPlayer: val});
  }

  setField(field, player) {
    const nextMove = player === this.state.userPlayer ? this.computerMove : () => {
      if (hasWon(this.state.gameState, this.state.computerPlayer) === this.state.computerPlayer) {
        console.log("--->computer won!", this.state.computerPlayer);
        this.setState({winner: this.state.computerPlayer});
      }
    };
    const newGameState = Object.assign({}, this.state.gameState);
    newGameState[field] = player;
    this.setState({
      gameState: newGameState
    }, nextMove);
  }

  computerMove() {
    if (hasWon(this.state.gameState, this.state.userPlayer) === this.state.userPlayer) {
      console.log("--->user won!", this.state.userPlayer);
      this.setState({winner: this.state.userPlayer});
    } else {
      const fieldToSet = getFieldToSet(this.state.gameState, this.state.computerPlayer, this.state.userPlayer);
      this.setField(fieldToSet, this.state.computerPlayer);
    }
  }

  render() {
    return(
      <div className="text-center">
        { ! this.state.userPlayer
           ? <PlayerSelection clickHandler={this.selectPlayer} />
           : <PlayGround clickHandler={this.setField} gameState={this.state.gameState} player={this.state.userPlayer} />
        }
      </div>
    );
  }
}

function getFieldToSet(gameState, computerPlayer, userPlayer) {
  // win?
  for (let i = 1; i <= 9; i++) {
    const field = "sqr" + i;
    if (gameState[field] === "") {
      const winGameSate = Object.assign({}, gameState);
      winGameSate[field] = computerPlayer;
      if (hasWon(winGameSate, computerPlayer) === computerPlayer) {
        console.log("---> winning");
        return field;
      }
    }
  }

  // block?
  for (let i = 1; i <= 9; i++) {
    const field = "sqr" + i;
    if (gameState[field] === "") {
      const winGameSate = Object.assign({}, gameState);
      winGameSate[field] = userPlayer;
      if (hasWon(winGameSate, userPlayer) === userPlayer) {
        console.log("---> blocking");
        return field;
      }
    }
  }

  // do next possible
  for (let i = 1; i <= 9; i++) {
    const field = "sqr" + i;
    if (gameState[field] === "") {
        console.log("---> next possible");
      return field;
    }
  }
}

function hasWon(gameState, val) {
  if (gameState.sqr1 === val && gameState.sqr2 === val && gameState.sqr3 === val) {
    return val;
  } else if (gameState.sqr4 === val && gameState.sqr5 === val && gameState.sqr6 === val) {
    return val;
  } else if (gameState.sqr7 === val && gameState.sqr8 === val && gameState.sqr9 === val) {
    return val;
  } else if (gameState.sqr1 === val && gameState.sqr5 === val && gameState.sqr9 === val) {
    return val;
  } else if (gameState.sqr1 === val && gameState.sqr4 === val && gameState.sqr7 === val) {
    return val;
  } else if (gameState.sqr2 === val && gameState.sqr5 === val && gameState.sqr8 === val) {
    return val;
  } else if (gameState.sqr3 === val && gameState.sqr6 === val && gameState.sqr9 === val) {
    return val;
  } else if (gameState.sqr3 === val && gameState.sqr5 === val && gameState.sqr7 === val) {
    return val;
  }
  const isDraw = Object.entries(gameState).reduce((prev, x) => {
    return prev && x[1] !== "";
  }, true);
  if (isDraw) {
    return "XO";
  }
  return null;
}
