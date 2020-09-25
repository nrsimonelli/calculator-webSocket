import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerList from '../AnswerList/AnswerList';


const ws = new WebSocket('ws://localhost:8080');


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
    this.webListen()

  }

  webListen = () => {
    ws.addEventListener('open', () => {
      console.log('webSocket Handshake');
      
      ws.send('test message success')
    })

    ws.addEventListener('message', e => {
      console.log(e);

      this.props.dispatch({ type: 'FETCH_CALCULATOR' });

    })
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
    let solve = 1;
    if(this.state.operator === '+') {
      
      solve = Number(this.state.x) + Number(this.state.y);
      
    }
    if(this.state.operator === '-') {

      solve = Number(this.state.x) - Number(this.state.y);
    
    }
    if(this.state.operator === '*') {
      
      solve = Number(this.state.x) * Number(this.state.y)
      
    }
    if(this.state.operator === '/') {
      
      solve = Number(this.state.x) / Number(this.state.y)
      
    }
    this.sendEquation(solve);
  }
  sendEquation = (solve) => {
    this.props.dispatch({
      type: "ADD_CALCULATOR",
      payload: {
        x: this.state.x,
        operator: this.state.operator,
        y: this.state.y,
        answer: solve,
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
    ws.send('group refresh?')
  }

  render() {
    return (
      <div className='root-calculator'>
        <p>Calculating here: {this.state.x + this.state.operator + this.state.y}</p>
        <div>
        <div className='row row-1'>
          <button
            className='digit'
            value={7}
            onClick={this.digitClicked}
          >7</button>
          <button
            className='digit'
            value={8}
            onClick={this.digitClicked}
          >8</button>
          <button
            className='digit'
            value={9}
            onClick={this.digitClicked}
          >9</button>
          <button
            className='operator'
            value={'/'}
            onClick={this.operatorClicked}
          >/</button>
        </div>
        <div className='row row-2'>
        <button
          className='digit'
          value={4}
          onClick={this.digitClicked}
        >4</button>
        <button
          className='digit'
          value={5}
          onClick={this.digitClicked}
        >5</button>
        <button
        className='digit'
          value={6}
          onClick={this.digitClicked}
        >6</button>
        <button
          className='operator'
          value={'*'}
          onClick={this.operatorClicked}
        >*</button>
        </div>
        <div className='row row-3'>
        <button
          className='digit'
          value={1}
          onClick={this.digitClicked}
        >1</button>
        <button
          className='digit'
          value={2}
          onClick={this.digitClicked}
        >2</button>
        <button
          className='digit'
          value={3}
          onClick={this.digitClicked}
        >3</button>
        <button
          className='operator'
          value={'-'}
          onClick={this.operatorClicked}
        >-</button>

        </div>
        <div className='row row-4'>
        <button
          className='digit'
          value={0}
          onClick={this.digitClicked}
        >0</button>
        <button
          className='clear'
          onClick={this.clearAll}
        >C</button>
        <button
          className='equal'
          value={'='}
          onClick={this.equalClicked}
        >=</button>
        <button
          className='operator'
          value={'+'}
          onClick={this.operatorClicked}
        >+</button>

        </div>

        </div>
       
          <AnswerList />

        <div>
        </div>
        
      </div>
    ) // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Calculator);