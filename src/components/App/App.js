import React from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('Hello, App.js Mounted');
    
  }
  
  render() {
    return (
      <div className="App">  
      <p>test</p>
      </div>
    ); // end return
  } // end render
} // end class

export default App;