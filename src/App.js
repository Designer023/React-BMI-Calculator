import React, { Component } from 'react';

import BMICalculator from './components/BMICalculator';

class App extends Component {

  render() {
    return (
      <BMICalculator startWeight={170} startHeight={70} />
    );
  }
}

export default App;
