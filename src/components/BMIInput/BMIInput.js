import React, { Component } from 'react';
import { lb2kg, kg2lbs, in2cm } from '../../utils';
import BMIUnitToggle from './components/BMIUnitToggle';
import BMIHeightInput from './components/BMIHeightInput';

import './BMIInput.css';



class BMIInput extends Component {

  constructor(props) {
         super(props);
        // this.updateHeightInCM = this.updateHeightInCM.bind(this);
        // this.updateHeightInFeetInches = this.updateHeightInFeetInches.bind(this);
        this.updateHeightUnits = this.updateHeightUnits.bind(this);
        this.updateWeightUnits = this.updateWeightUnits.bind(this);

        this.updateWeightMetric = this.updateWeightMetric.bind(this);

        this.updateHeight = this.updateHeight.bind(this);
  }


  updateHeight(heightInches){
    this.props.updateHeight(heightInches);
  }

  updateHeightUnits(event) {
      let val = (event.target.value === "true");
      this.props.updateHeightUnits(val);
  }


  updateWeightUnits(event) {

      let val = (event.target.value === "true");
      this.props.updateWeightUnits(val);
  }


  updateWeightMetric(event) {
    var weightLbs= kg2lbs(parseInt(event.target.value, 10));
    //console.log('test ', weightLbs);
    this.props.updateWeightMetric(weightLbs)
  }



  weightInput() {

    let metricWeight = Math.round(lb2kg(this.props.weight));

    if (this.props.displayMetricWeight === true) {
      return (
          <input type="number" id="weight" onChange={this.updateWeightMetric} value={metricWeight} step={1}/>
      )
    } else {

      return(
        <input type="number" id="weight" onChange={this.props.updateWeight} value={this.props.weight} step={5}/>
      )
    }
  }



  render () {

    return (

      <form className="bmi-input-form">

        <div className="bmi-input-form__row">



          <label>Weight
            { this.weightInput() }
          </label>

        </div>

        <div className="bmi-input-form__row">


          <label>Height
              <BMIHeightInput height={this.props.height}
               displayMetricHeight={this.props.displayMetricHeight}
               updateHeight={this.updateHeight}
              />
          </label>

        </div>

      </form>

    )
  }

}

export default BMIInput;
