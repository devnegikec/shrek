import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Person name="dev" age="30" />
        <Person name="Ram" age="28">My hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
