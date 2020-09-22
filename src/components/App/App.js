import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(App);