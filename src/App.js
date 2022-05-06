import './App.css';
import React from 'react';
import logo from './assets/img/igc.png'
class App extends React.Component {

  url = "https://infogalaxycomp.com"

  constructor(){
    super()
    this.state = {
      title : "Hello World from Tahir Mansuri."
    }
  }

  onClick = ($event) => {
      console.log("Image Clicked",$event);
      window.open(this.url,'_blank');
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick} alt="The InfoGalaxy Logo"></img>
      </div>
    );
  }
}

export default App;
