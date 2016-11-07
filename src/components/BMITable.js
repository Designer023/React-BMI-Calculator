import React, { Component } from 'react';

import BMIRow from './BMIRow';

import { lb2kg, in2M } from '../utils';


class BMITable extends Component {

  render () {

    var minHeight = this.props.height - this.props.tableRange;
    var maxHeight = this.props.height + this.props.tableRange;
    var minWeight = this.props.weight - (this.props.tableRange * 5);
    var maxWeight = this.props.weight + (this.props.tableRange * 5);

    var currentWeight = this.props.weight;
    var currentHeight= this.props.height;

    var tableData = {
      colHeaders: [],
      rowData: [],
    };

    //create array of headers (weight)
    for (var headerweight = minWeight; headerweight <= maxWeight; headerweight += 5) {
      tableData.colHeaders.push(headerweight);
    }

    //create array of rows (based on height)
    for (var height = minHeight; height <= maxHeight; height++) {

      //Create array of weights for each height
      var weightArray = {
        height: height,
        heightM: in2M(height),
        data: []
      };

      for (var weight = minWeight; weight <= maxWeight; weight += 5) {
        //add BMI for cell


        let cellBMI = (lb2kg(weight) / in2M(height)) / in2M(height);

        let cellData = {
          bmi: cellBMI,
          height: height,
          weight: weight
        }
        weightArray.data.push(cellData);
      }

      tableData.rowData.push(weightArray)


    }

    let headers = tableData.colHeaders.map(function(weight, index){

      return(
        <th key={weight}>
          {weight}
        </th>
      );
    });

    let rows = tableData.rowData.map(function(data, index){
        return(
          <BMIRow data={data} key={data.height} currentWeight={currentWeight} currentHeight={currentHeight} />
        );
    });

    return (

        <div>

          <table>
            <tbody>
                <tr>
                  <th>-</th>
                  {headers}
                </tr>

                {rows}
              </tbody>
          </table>

        </div>

    )
  }
}


export default BMITable;
