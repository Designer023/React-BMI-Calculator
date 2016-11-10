import React, { Component } from 'react';

import { in2cm, cm2in } from '../../../utils';

class BMIHeightInput extends Component {

  constructor(props) {
    super(props);

    this.updateHeightInCM = this.updateHeightInCM.bind(this);
    this.updateHeightInFeetInches = this.updateHeightInFeetInches.bind(this);
  }

  updateHeightInCM(event) {
    event.preventDefault();
    var heightInches = cm2in(parseInt(event.target.value, 10));
    this.props.updateHeight(heightInches);
  }


  updateHeightInFeetInches(event) {
    event.preventDefault();
    var heightInches = (parseInt(this.refs.feet.value, 10) * 12) + parseInt(this.refs.inches.value, 10);
    this.props.updateHeight(heightInches);
  }


  render() {
    let metricHeight = parseInt(Math.round(in2cm(this.props.height)), 10);
    let feetHeight = Math.floor(this.props.height / 12);
    if (this.props.height === 12 ) {
      feetHeight++;
    }

    let inchesHeight = Math.floor( this.props.height % 12);

    if (this.props.displayMetricHeight === true) {
      return (
        <div>
          <input type="number" id="height" onChange={this.updateHeightInCM} value={metricHeight} />
        </div>
      )
    } else {
      return (
        <div>
          <input type="number" id="heightFeet" onChange={this.updateHeightInFeetInches} value={feetHeight} ref="feet" />
          <input type="number" id="heightInches" onChange={this.updateHeightInFeetInches} value={inchesHeight} ref="inches" />

        </div>
      )
    }
  }
}


export default BMIHeightInput;
