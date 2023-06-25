import './App.css';
import React, {Component} from 'react';
import ValidationComponent from './Validation/ValidationComponent.js';


class App extends Component {

  state = {
    textLength: 0
  };

  textChangeLengthHandler = (event) => {
    this.setState( {textLength: event.target.value.length});

  }

  render() {

    return (
      <div className="App">
        <input
          onChange = {this.textChangeLengthHandler}
          placeHolder='Measure Text Length' />

        <p>{this.state.textLength}</p>

      </div>
    );
  }
}

export default App;
