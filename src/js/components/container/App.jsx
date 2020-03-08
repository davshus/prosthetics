import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../presentational/NavBar.jsx';
// import '../../../css/global.css';
import '../../../css/App.css';
import Hero from "../presentational/Hero.jsx";
import ProstheticClassChoice from "../presentational/ProstheticClassChoice.jsx";
import DataEntry from "../presentational/DataEntry.jsx";
import {scrollScreenNext} from "../../helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {prostheticClass: 'none'};
    this.choose = this.choose.bind(this); //bruh
  }
  choose(choice) {
    this.setState({...this.state, prostheticClass: choice});
    this.updateDataEntry('title', choice);
    // scrollScreenNext();
  }
  updateDataEntry(id, value) {

    console.log(id, value);
    this.setState(function(prevState, props) {
      return {
        dataEntry: {
          [id]: value
        }
      };
    });
  }
  render() {
    return <div className='global-container'>
      {/*<NavBar />*/}
      <Hero></Hero>
      <ProstheticClassChoice choose={this.choose}></ProstheticClassChoice>
      {
        (() => {
          switch(this.state.prostheticClass) {
            case 'Stifle':
              return <DataEntry title={this.state.prostheticClass} diagram="img/stifle-diagram.svg" fieldNames={{'legdiameter': 'Leg Diameter', 'stifle_length': 'Stifle Length'}}></DataEntry>
            case 'Full':
              return <DataEntry title={this.state.prostheticClass} diagram="img/full-diagram.svg" fieldNames={{'dogGirth': 'Body Diameter', 'legHeight': 'Leg Height'}} ></DataEntry>
          }
        })()
      }
    </div>
  }
}

export default App;