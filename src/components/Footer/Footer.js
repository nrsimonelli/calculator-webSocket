import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {

  render() {
    return (
      <div className='root-footer'>
        <p>this is footer</p>
      </div>
    ) // end return
  } // end render
} // end class

export default connect()(Footer);