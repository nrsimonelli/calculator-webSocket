import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerList extends Component {

  render() {
    return (
      <div className='root-list'>
        
      </div>
    ) // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AnswerList);