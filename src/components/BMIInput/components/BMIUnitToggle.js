import React, { Component } from 'react';

class BMIUnitToggle extends Component {
  render() {
    return(

      <div>

        <label><input type="radio" name={this.props.name} checked={this.props.value === true} value={true} onChange={this.props.onChange} />{this.props.trueLabel}</label>

        <label><input type="radio" name={this.props.name} checked={this.props.value === false} value={false} onChange={this.props.onChange} />{this.props.falseLabel}</label>

      </div>

    )
  }
}


export default BMIUnitToggle;
