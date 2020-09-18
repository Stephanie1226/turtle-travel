import React from 'react';
import Header from './components/header/Header';
import PlotRoute from './components/PlotRoute';
import ReadFile from './components/readFile/ReadFile';
import Reset from './components/reset/Reset';
import DuplicatePoints from './components/duplicatePoints/DuplicatePoints';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="button-layout">
          <ReadFile />
          <Reset />
        </div>
        <div className="setup">
          <h4>Setup</h4>
          <p>1. Download the backend file from this <a href="https://github.com/Stephanie1226/turtle-travel-backend">Github repo</a>.<br />
          $ git clone https://github.com/Stephanie1226/turtle-travel-backend.git</p>
          <p>2. cd into the folder.<br />
          $ cd turtle-travel-backend</p>
          <p>3. Install the packages.<br />
          $ pip install -r requirements.txt</p>
          <p>4. Run the python file.<br />
          $ python wsgi.py</p>
          <p>5. The backend server is now running on: <a href="http://localhost:5000">http://localhost:5000</a></p>
        </div>
        <div className="instruction">
          <h4>Instructions:</h4>
          <p>1. Upload a .txt file which only includes: L, R, F.<br />
          For example, The file will be like: FLRRFRFRRFRFLLFRFFFRRLLLRLFLRRLFL</p>
          <p>2. F: Move forward; L: Tuen Left; R: Turn Right</p>
          <p>3. The Turtle's original location is (0,0), facing north.</p>
          <p>4. The start point (0,0) and the end point are in darker green. Others points the turtle passed by are in light blue.</p>
          <p>5. The coordinates that the turtle passed by more than once will show on the bottom of the page.</p>
          <p>6. "Reset Turtle" button to reset all of the data.</p>
        </div>
        <PlotRoute />
        <DuplicatePoints />
      </div>
    );
  }
}

export default App;






