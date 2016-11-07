import React, { Component } from 'react';
import { lb2kg, kg2lbs, in2cm, cm2in } from '../utils';

class BMIInput extends Component {

  constructor(props) {
         super(props);
        this.updateHeightInCM = this.updateHeightInCM.bind(this);
        this.updateHeightInFeetInches = this.updateHeightInFeetInches.bind(this);
        this.updateHeightUnits = this.updateHeightUnits.bind(this);
        this.updateWeightUnits = this.updateWeightUnits.bind(this);

        this.updateWeightMetric = this.updateWeightMetric.bind(this);
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





  heightInput() {
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

  render () {

    return (

      <form>
        <label>
          <span>Weight</span>
          { this.weightInput() }



          <div>

            <label><input type="radio" name="weightMeasurementType" checked={this.props.displayMetricWeight === true} value={true} onChange={this.updateWeightUnits} />Kgs</label>

            <label><input type="radio" name="weightMeasurementType" checked={this.props.displayMetricWeight === false} value={false} onChange={this.updateWeightUnits} />Lbs</label>

          </div>

        </label>

        <label>
          <span>Height</span>
          { this.heightInput() }


          <div>

            <label><input type="radio" name="heightMeasurementType" checked={this.props.displayMetricHeight === true} value={true} onChange={this.updateHeightUnits} />CM</label>

            <label><input type="radio" name="heightMeasurementType" checked={this.props.displayMetricHeight === false} value={false} onChange={this.updateHeightUnits} />Feet and Inches</label>

          </div>


        </label>
      </form>

    )
  }

}

export default BMIInput;
