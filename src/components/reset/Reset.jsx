import React, { Component } from 'react';
import './ResetStyles.css';

import { connect } from 'react-redux';
import { load_input_data } from '../../Redux/inputData/inputData-action';

const mapDispatchToProps = (dispatch) => {
  return {
    load_input_data: (data) => dispatch(load_input_data(data))
  }
}

class Reset extends Component {
	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.load_input_data("");
  }

  render() {
   	return (
      <div className='reset-box'>
        <div className="tc reset-container">
          <input type="button" id="my-reset" className="input-reset" onClick={this.handleClick}/>
          <label tabindex="0" for="my-reset" className="input-reset-trigger">Reset Turtle</label>  
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Reset);





