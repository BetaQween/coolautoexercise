import React, { Component } from 'react';
import Tempvalue from './components/Tempvalue'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.arr = ['radial-gradient(at bottom, #33c9ff, #0074b3)',
    'radial-gradient(at bottom,  #33C2FF, #006EB3)',
    'radial-gradient(at bottom, #33B8FF, #0065B3)',
    'radial-gradient(at bottom,  #33B1FF, #005FB3)',
    'radial-gradient(at bottom, #33AEFF, #0058B3)',
    'radial-gradient(at bottom,  #3381FF, #0035B3)',
    'radial-gradient(at bottom, #3365FF, #0016B3)',
    'radial-gradient(at bottom,  #334CFF, #0001B3)',
    'radial-gradient(at bottom,  #334CFF, #0001B3)'
  ];
  this.arrNumbers = [15, 16, 17, 18, 19, 20, 21, 22, 23];
    this.state = {
      incrementValue: this.arrNumbers[0],
      colorArr: {background: this.arr[0]},
      index: 0,
      visible1: {display: 'block'},
      visible2: {visibility: 'hidden'}
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  }
 //  componentDidMount() {
 //    window.addEventListener('mouseup', this.increment);
 //    window.addEventListener('touchend', this.increment);
 // }


increment(){
  var i = this.state.index;
  ++i;
  var increment = this.arrNumbers[i];
  console.log(increment);
  var color = {background: this.arr[i]};

  if(increment >= 23){
    this.setState({visible1: {visibility: 'hidden'}});
    // window.removeEventListener('mouseup', this.increment);
    // window.addEventListener('mouseup', this.decrement);
    // window.addEventListener('touchend', this.decrement);

  }
  this.setState({colorArr: color})
  this.setState({index: i})
  this.setState({incrementValue:increment})
  this.setState({visible2: {display: 'block'}})
  //e.preventDefault();
}

decrement(){
  var i = this.state.index;
  --i;
  var decrement = this.arrNumbers[i];
  console.log(decrement);

  var color = {background: this.arr[i]};
  if(decrement <= 15){
    this.setState({visible2: {visibility: 'hidden'}});
 // window.removeEventListener('mouseup', this.decrement);
 // window.addEventListener('mouseup', this.increment);
 // window.addEventListener('touchend', this.increment);

  }
  this.setState({colorArr: color})
  this.setState({index: i})
  this.setState({incrementValue:decrement})
  this.setState({visible1: {display: 'block'}})
}

render() {

    return (
      <div className='App' style = {this.state.colorArr}>
        <div style = {this.state.visible1} ><span className='button' onClick={this.increment}>▲</span></div>
        <Tempvalue incrementValue={this.state.incrementValue} />
        <div style = {this.state.visible2} ><span className='button' onClick={this.decrement}>▼</span></div>
      </div>
    );
  }
}

export default App;
