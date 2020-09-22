import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Calculator from '../Calculator/Calculator';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('Hello, App.js Mounted');
    
  }
  
  render() {
    return (
      <div className="root">  
      <Header />
      <Calculator />
      <Footer />
      </div>
    ); // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(App);