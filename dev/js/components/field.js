'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class Field extends Component {
  constructor(props) {
    super();
  }

  setField() {
    this.props.clickHandler(this.props.id);
  }

  render() {
    return(
      <div className={`field field-${this.props.id}`} onClick={this.setField.bind(this)}>
      </div>
    );
  }
}
