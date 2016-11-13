import React, { Component } from 'react';
import { connect } from 'react-redux';


import { bindActionCreators } from 'redux';
import * as Actions from './actions';

import BMITable from './components/BMITable';

import BMIUnitToggle from './components/BMIUnitToggle';
import WeightInput from './components/WeightInput';
import HeightInput from './components/HeightInput';


class App extends Component {

  render() {
    return (

      <div>

        <BMIUnitToggle name="wmt" value={this.props.bmi.displayMetricWeight} trueLabel="KG" falseLabel="Lbs" onChange={this.props.actions.requestBMIWeightUnit} />

        <WeightInput weight={this.props.bmi.weight} displayMetricWeight={this.props.bmi.displayMetricWeight} updateBMIWeight={this.props.actions.updateBMIWeight} />

        <BMIUnitToggle name="hmt" value={this.props.bmi.displayMetricHeight} trueLabel="CM" falseLabel="Feet &amp; Inches" onChange={this.props.actions.requestBMIHeightUnit} />

        <HeightInput height={this.props.bmi.height} displayMetricHeight={this.props.bmi.displayMetricHeight} updateBMIHeight={this.props.actions.updateBMIHeight} />

        <BMITable weight={this.props.bmi.weight} height={this.props.bmi.height} tableRange={this.props.bmi.tableRange} />

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    bmi: state.bmi
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//import BMICalculator from './components/BMICalculator';
//<BMICalculator startWeight={170} startHeight={70} />
