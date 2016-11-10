import React, { Component } from 'react';

import BMIInput from './BMIInput/BMIInput';
import BMITable from './BMITable';

import { roundN } from '../utils';

import './Calculator.css';

class BMICalculator extends Component {

  constructor(props) {
         super(props);
         this.state = ({
           weight: this.props.startWeight,
           height: this.props.startHeight,
           displayMetricHeight: this.props.metricHeight,
           displayMetricWeight: this.props.metricWeight,
           tableRange: this.props.tableRange
         });

        this.updateWeight = this.updateWeight.bind(this);
        this.updateWeightMetric = this.updateWeightMetric.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
        this.updateHeightUnits = this.updateHeightUnits.bind(this);
        this.updateWeightUnits = this.updateWeightUnits.bind(this);
  }


  updateWeight(event) {
      let roundedWeight = roundN(parseInt(event.target.value, 10), 5);
      this.setState({
        weight: roundedWeight
      });
  }

  updateWeightMetric(weight) {
    let roundedWeight = roundN(weight, 1);
    this.setState({
      weight: roundedWeight
    });
  }


  updateHeight(height) {
      this.setState({
        height: height
      });
  }

  updateHeightUnits(value) {
    this.setState({
      displayMetricHeight: value
    });
  }

  updateWeightUnits(value) {
    this.setState({
      displayMetricWeight: value
    });
  }

  render() {
    return (
      <div className="bmi-calcualtor">

        <BMIInput
        weight={this.state.weight}
        height={this.state.height}
        updateWeight={ this.updateWeight }
        updateHeight={ this.updateHeight }
        updateWeightMetric={this.updateWeightMetric }
        displayMetricWeight={this.state.displayMetricWeight}
        displayMetricHeight={this.state.displayMetricHeight}
        updateHeightUnits={this.updateHeightUnits}
        updateWeightUnits={this.updateWeightUnits}
        />

        <BMITable weight={this.state.weight} height={this.state.height} tableRange={this.state.tableRange} />

      </div>
    );
  }
}

BMICalculator.propTypes = {
  startWeight: React.PropTypes.number.isRequired,
  startHeight: React.PropTypes.number.isRequired,
  metricHeight: React.PropTypes.bool,
  metricWeight: React.PropTypes.bool,
  tableRange: React.PropTypes.number
}

BMICalculator.defaultProps = {
    metricHeight: false,
    metricWeight: false,
    tableRange: 6
}

export default BMICalculator;
