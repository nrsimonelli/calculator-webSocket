import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerList extends Component {
  render() {
    return (
      <div className='root-list'>
        {this.props.reduxState.calculator && (
          <ul>
          {this.props.reduxState.calculator.map( entry => (
            <li key={entry.id}>{entry.x + entry.operator + entry.y +'=' + entry.answer}</li>

          ))}
        </ul>
        )}
        
      </div>
    ) // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AnswerList);