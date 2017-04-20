'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Field from './field'

export default class PlayGround extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="playground">
        <Row>
          <Col xs={4}>
            <Field id="11" />
          </Col>
          <Col xs={4}>
            <Field id="12" />
          </Col>
          <Col xs={4}>
            <Field id="13" />
          </Col>
        </Row>
          <Row>
            <Col xs={4}>
              <Field id="21" />
            </Col>
            <Col xs={4}>
              <Field id="22" />
            </Col>
            <Col xs={4}>
              <Field id="23" />
            </Col>
          </Row>
            <Row>
              <Col xs={4}>
                <Field id="31" />
              </Col>
              <Col xs={4}>
                <Field id="32" />
              </Col>
              <Col xs={4}>
                <Field id="33" />
              </Col>
            </Row>
      </div>
    );
  }
}
