import './App.css';
import React from 'react';
import logo from './assets/img/igc.png'
class App extends React.Component {

  constructor(){
    super()
    this.state = {
      title : "Hello World from Tahir Mansuri."
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="The InfoGalaxy Logo"></img>
      </div>
    );
  }
}

export default App;
