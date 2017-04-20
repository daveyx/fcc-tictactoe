'use strict';

import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class Field extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className={`field field-${this.props.id}`}>
        
      </div>
    );
  }
}
