import React, { Component } from 'react';

class BMIUnitToggle extends Component {
  onInputChange(value) {
    let metric = (value === "true");
    this.props.onChange(metric);
  }

  render() {
    return(

      <div>

        <label><input type="radio" name={this.props.name} checked={this.props.value === true} value={true} onChange={event => this.onInputChange(event.target.value)} />{this.props.trueLabel}</label>

        <label><input type="radio" name={this.props.name} checked={this.props.value === false} value={false} onChange={event => this.onInputChange(event.target.value)} />{this.props.falseLabel}</label>


      </div>

    )
  }
}


export default BMIUnitToggle;
