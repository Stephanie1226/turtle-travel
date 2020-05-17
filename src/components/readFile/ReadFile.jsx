import React, { Component } from 'react';
import './ReadFileStyles.css';

import { connect } from 'react-redux';
import { load_input_data } from '../../Redux/inputData/inputData-action';

const mapDispatchToProps = (dispatch) => {
  return {
    load_input_data: (data) => dispatch(load_input_data(data))
  }
}

class ReadFile extends Component {
 
  showFile = (event) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var preview = document.getElementById('show-text');
      var file = document.querySelector('input[type=file]').files[0];
      var reader = new FileReader();
      var textFile = /text.*/;

      if (file.type.match(textFile)) {
        reader.onload = event => {
          this.props.load_input_data(event.target.result);
          preview.innerHTML = "<span>Upload success!</span>";
        }
      } else {
        preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
      }
      reader.readAsText(file);
      this.setState({input_data: "ABC"});
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  }

  render() {
    return (
      <div className="dl-box">
        <div className="tc input-file-container">  
          <input className="input-file" id="my-file" type="file" onChange={this.showFile} />
          <label tabindex="0" for="my-file" className="input-file-trigger">Select a file here</label>
        </div>
        <p id="show-text" className="show-msg"></p>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ReadFile);

