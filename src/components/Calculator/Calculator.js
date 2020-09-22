import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerList from '../AnswerList/AnswerList';

class Calculator extends Component {

  render() {
    return (
      <div className='root-calculator'>
        <p>testing calc xxxxx</p>
        <p>many buttons here</p>
        <AnswerList />
      </div>
    ) // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Calculator);