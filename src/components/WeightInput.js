import React, {Component} from 'react'
import { lb2kg, kg2lbs } from '../utils';
import "./Inputs.css";

class WeightInput extends Component {

  constructor(props) {
        super(props);
        this.updateWeightMetric = this.updateWeightMetric.bind(this);
        this.updateWeight = this.updateWeight.bind(this);
  }

  updateWeight(event) {
    let weightLbs = parseInt(event.target.value, 10);
    this.props.updateBMIWeight(weightLbs);
  }

  updateWeightMetric(event) {
    let weightLbs= kg2lbs(parseInt(event.target.value, 10));
    this.props.updateBMIWeight(weightLbs)
  }



  weightInput() {

    let metricWeight = Math.round(lb2kg(this.props.weight));

    if (this.props.displayMetricWeight === true) {
      return (
          <input className="bmi-form-field" type="number" id="weight" onChange={this.updateWeightMetric} value={metricWeight} step={1}/>
      )
    } else {
      return(
        <input className="bmi-form-field" type="number" id="weight" onChange={this.updateWeight} value={this.props.weight} step={5}/>
      )
    }
  }

  render() {

      return (

        <div>
          <label>Weight</label>
          { this.weightInput() }
        </div>

      )

  }
}


export default WeightInput;
