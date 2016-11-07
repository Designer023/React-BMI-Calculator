import React, { Component } from 'react';

class BMIRow extends Component {


  render () {
      let rowHeight = Math.round(this.props.data.height);
      let currentWeight = this.props.currentWeight;
      let currentHeight = this.props.currentHeight;


      let rowData = this.props.data.data.map(function(cellData, index){
      let roundedBMI = Math.round(cellData.bmi);
      var cellClasses = 'bmi-' + roundedBMI;

      if ( roundedBMI < 19) {
       cellClasses += ' low ';
     } else if ( roundedBMI < 25) {
       cellClasses += ' normal ';
     } else if ( roundedBMI < 30) {
       cellClasses += ' high ';
     } else {
       cellClasses += ' very-high ';
     }

     if ( cellData.height === currentHeight ) {
       cellClasses += ' currentRow';
     }

     if ( cellData.weight === currentWeight ) {
       cellClasses += ' currentCol';
     }
     let key = (cellData.height * cellData.weight) + "_" + roundedBMI;

      return(
        <td className={cellClasses} key={key}>
          { roundedBMI }
        </td>
      )

    })

    return(
      <tr>
        <th>
          {rowHeight}
        </th>

        {rowData}
      </tr>
    );

  }

}

export default BMIRow;
