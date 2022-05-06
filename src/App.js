import './App.css';
import React from 'react';

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
      </div>
    );
  }
}

export default App;
