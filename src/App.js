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
        <div className="instruction tc">
          <h4>Instructions:</h4>
          <p>The Turtle's original location is (0,0), facing north.</p>
          <p>The start point (0,0) and the end point are in darker green. Others points the turtle passed by are in light blue.</p>
          <p>The coordinates that the turtle passed by more than once will show on the bottom of the page.</p>
          <p>"Reset Turtle" button to reset all of the data.</p>
        </div>
        <PlotRoute />
        <DuplicatePoints />
      </div>
    );
  }
}

export default App;






