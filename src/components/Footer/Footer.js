import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

  render() {
    return (
      <div className='root-footer'>
        <p>~</p>
      </div>
    ) // end return
  } // end render
} // end class

export default connect()(Footer);