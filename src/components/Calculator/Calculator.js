import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calculator extends Component {

  render() {
    return (
      <div className='root-calculator'>
        
      </div>
    ) // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Calculator);