import React, { Component } from 'react';

class Tempvalue extends Component {
  constructor(){
    super();
  }

onEventChange(event){
  // if(event===)
  return console.log(event);
}


  render() {
    return (
      // <div onChange={event=>onEventChange()}>
      <div>
      <span className="valueNumber">
        {this.props.incrementValue}
        <sup className="temperature">°</sup>
      </span>

        </div>
    );
  }
}

export default Tempvalue;
