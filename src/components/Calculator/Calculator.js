import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerList from '../AnswerList/AnswerList';

class Calculator extends Component {
  state = {
    x: '',
    operator: '',
    y: '',
    answer: '',
    onY: false,
    oneOperator: false,

  }
  
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CALCULATOR' });
  }

  digitClicked = (event) => {
    console.log('digit clicked!')
    if (this.state.onY === false) {
      this.setState({
        x: this.state.x + event.target.value
      });
    }
    if (this.state.onY === true) {
      this.setState({
        y: this.state.y + event.target.value
      });
    }
  }
  operatorClicked = (event) => {
    console.log('operator clicked!')
    if (this.state.onOperator === true) {
      alert('only one operator per calculation!')
    } else {
      this.setState({
        operator: event.target.value,
        onY: true,
        oneOperator: true
      })
    }

  }
  equalClicked = () => {
    console.log('equals clicked!')
    console.log(this.state.x, this.state.operator, this.state.y);

    this.calculate();
  }
  calculate = () => {
    if(this.state.operator === '+') {
      this.setState({
        answer: Number(this.state.x) + Number(this.state.y)
      })
    }
    if(this.state.operator === '-') {
      this.setState({
        answer: Number(this.state.x) - Number(this.state.y)
      })
    }
    if(this.state.operator === '*') {
      this.setState({
        answer: Number(this.state.x) * Number(this.state.y)
      })
    }
    if(this.state.operator === '/') {
      this.setState({
        answer: Number(this.state.x) / Number(this.state.y)
      })
    }
    this.sendEquation();
  }
  sendEquation = () => {
    this.props.dispatch({
      type: "ADD_CALCULATOR",
      palyoad: {
        x: this.state.x,
        operator: this.state.operator,
        y: this.state.y,
        answer: this.state.answer,
      },
    });
    this.clearAll();
  }
  clearAll = () => {
    console.log('blank slate')
    this.setState({
      x: '',
      operator: '',
      y: '',
      answer: '',
      onY: false,
      oneOperator: false,
    })
    this.props.dispatch({ type: 'FETCH_CALCULATOR' })
  }

  render() {
    return (
      <div className='root-calculator'>
        <p>Calculating here: {this.state.x + this.state.operator + this.state.y}</p>
        <div className='row row-1'>
          <button
            value={7}
            onClick={this.digitClicked}
          >7</button>
          <button
            value={8}
            onClick={this.digitClicked}
          >8</button>
          <button
            value={9}
            onClick={this.digitClicked}
          >9</button>
          <button
            value={'/'}
            onClick={this.operatorClicked}
          >/</button>
        </div>
        <div className='row row-2'>
        <button
          value={4}
          onClick={this.digitClicked}
        >4</button>
        <button
          value={5}
          onClick={this.digitClicked}
        >5</button>
        <button
          value={6}
          onClick={this.digitClicked}
        >6</button>
        <button
          value={'*'}
          onClick={this.operatorClicked}
        >*</button>
        </div>
        <div className='row row-3'>
        <button
          value={1}
          onClick={this.digitClicked}
        >1</button>
        <button
          value={2}
          onClick={this.digitClicked}
        >2</button>
        <button
          value={3}
          onClick={this.digitClicked}
        >3</button>
        <button
          value={'-'}
          onClick={this.operatorClicked}
        >-</button>

        </div>
        <div className='row row-4'>
        <button
          value={0}
          onClick={this.digitClicked}
        >0</button>
        <button
          onClick={this.clearAll}
        >C</button>
        <button
          value={'='}
          onClick={this.equalClicked}
        >=</button>
        <button
          value={'+'}
          onClick={this.operatorClicked}
        >+</button>

        </div>
        {/* {this.props.reduxState.calculations.map((entry, i)=> (
          <AnswerList key={i} entry={entry} />
        ))} */}

        <div>
          testing:
          {JSON.stringify(this.props.reduxState)}
        </div>
        
      </div>
    ) // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Calculator);