import './App.css';
import React, {Component} from 'react';
import ValidationComponent from './Validation/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {

  state = {
    textLength: 0,
    textVal: ''
  };

  /**Handle text change */
  textChangeLengthHandler = (event) => {
    this.setState( {textLength: event.target.value.length,
      textVal: event.target.value});

  }

  /** Render each character from input strin to box*/
  renderCharComponents = () => {
    let tags = [];



    // render box for each character
    for (let i = 0; i < this.state.textVal.length; i++) {
      tags.push(
        <CharComponent
          key={'text_' + i + this.state.textVal}
          char= {this.state.textVal[i]}
          removalHandler= {() => this.itemRemovalHandler(i)}/>
      );
    }
      //return tags
     return (
       <div>
       {tags}
       </div>

     );
  }

  /** Handle Item removal click*/
  itemRemovalHandler = (itemIndex) => {
    let str = this.state.textVal;
    str = this.state.textVal.slice(0, itemIndex);
    if(itemIndex +1 < this.state.textVal.length) {
      str += this.state.textVal.slice(itemIndex + 1);
    }
    this.setState({
      textLength: str.length,
      textVal: str
    });
  }

  /** App component render*/
  render() {

    return (
      <div>

        <ol>
          <li>Create input field in App Component with TextChange Handler which outputs the text lentgh below in paragraph</li>
          <li>Create a new component (Validation Component) which receives text length as property</li>
          <li>Inside the validation component, validate the length and output message 'Text is too short' or 'Text is long enough' based on min lentgh 5</li>
          <li>Create another component CharComponent and style it as inline box</li>
          <li>Render a list of CharComponent which each receives different char from text as prop</li>
          <li>When you click a CharComponent, it should be removed from list</li>
        </ol>
        <br />------------------------------------------------------------------------------------------------------------------------------
        

        <div className="App">
          <input
            onChange = {this.textChangeLengthHandler}
            value ={this.state.textVal} />

          {/** Write the text length*/}
          <p>Text Length: {this.state.textLength}</p>

          {/** Write the text length validation method*/}
          <ValidationComponent
            textLength={this.state.textLength} />

          {/** Split string letters*/}
          {this.renderCharComponents()}
        </div>

      </div>
    );
  }
}

export default App;
