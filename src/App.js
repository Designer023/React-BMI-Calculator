import React, { Component } from 'react';

import BMIInput from './components/BMIInput';
import BMITable from './components/BMITable';

import { roundN } from './utils';

import './App.css';

class App extends Component {

  constructor(props) {
         super(props);

         this.state = ({
           weight: 170,
           height: 70,
           value: 170,
           displayMetricHeight: false,
           displayMetricWeight: false
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
      <div className="App">

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

        <BMITable weight={this.state.weight} height={this.state.height} tableRange={6} />

      </div>
    );
  }
}

export default App;
