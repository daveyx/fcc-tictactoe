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
            <Field id="11" clickHandler={this.props.clickHandler} />
          </Col>
          <Col xs={4}>
            <Field id="12" clickHandler={this.props.clickHandler} />
          </Col>
          <Col xs={4}>
            <Field id="13" clickHandler={this.props.clickHandler} />
          </Col>
        </Row>
          <Row>
            <Col xs={4}>
              <Field id="21" clickHandler={this.props.clickHandler} />
            </Col>
            <Col xs={4}>
              <Field id="22" clickHandler={this.props.clickHandler} />
            </Col>
            <Col xs={4}>
              <Field id="23" clickHandler={this.props.clickHandler} />
            </Col>
          </Row>
            <Row>
              <Col xs={4}>
                <Field id="31" clickHandler={this.props.clickHandler} />
              </Col>
              <Col xs={4}>
                <Field id="32" clickHandler={this.props.clickHandler} />
              </Col>
              <Col xs={4}>
                <Field id="33" clickHandler={this.props.clickHandler} />
              </Col>
            </Row>
      </div>
    );
  }
}
