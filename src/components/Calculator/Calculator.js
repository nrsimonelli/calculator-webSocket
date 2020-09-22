import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerList from '../AnswerList/AnswerList';

class Calculator extends Component {
  state = {
    x: '',
    operator: '',
    y: '',
    onY: false,
    onOperator: false,

  }

  digitClicked = (event) => {
    console.log('digit clicked!')
  }
  operatorClicked = (event) => {
    console.log('operator clicked!')

  }
  equalClicked = () => {
    console.log('equals clicked!')

  }
  clearAll = () => {

  }

  render() {
    return (
      <div className='root-calculator'>
        <p>Calculate Here</p>
        <button
          value={1}
          onClick={this.digitClicked}
        >1</button>
        <button
          value={'+'}
          onClick={this.operatorClicked}
        >+</button>
        <button
          value={'='}
          onClick={this.equalCicked}
        >=</button>
        <AnswerList />
      </div>
    ) // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Calculator);