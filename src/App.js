import React, { Component } from 'react';
import './App.css';
import Button from './components/button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button value="按钮" onClick={this.z.bind(this)}/>
        <Button></Button>
        <Button></Button>
      </div>
    );
  }
  z(e){
    console.log(e)
  }
}

export default App;
