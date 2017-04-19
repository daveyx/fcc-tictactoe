'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class PlayerSelection extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={12}>
            What you wanna play?
          </Col>
        </Row>
        <Row className="player-selection">
          <Col xs={2} xsOffset={4}>
            X
          </Col>
          <Col xs={2}>
            O
          </Col>
        </Row>
      </div>
    );
  }
}
