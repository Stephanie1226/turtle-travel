import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip} from 'victory';
import { VictoryLine, VictoryScatter, VictoryAxis, VictoryTheme } from 'victory';

import { connect } from 'react-redux';
import { load_coordinates } from '../Redux/coordinatesData/coordinatesData-action';


const strokeDasharray = "10, 5";
const mapStateToProps = (state) => {
  return {
    inputInfo: state.inputData.input_data
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    load_coordinates: (data) => dispatch(load_coordinates(data))
  }
}

function PlotRoute ({inputInfo, load_coordinates}) {
  const [coordinates, setCoordinates] = useState([]);

  //Send the data to backend and get the coordinates
  useEffect(() => {
    fetch("/calculateroute", {
      method:"POST",
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(inputInfo)
    })
    .then(response => response.json())
    .then(data => {setCoordinates(data)});
  }, [inputInfo, setCoordinates]);

  // Check all the duplicate points
  let duplicates = [];
  let result = {};
  coordinates.forEach(function(item) {
    result[JSON.stringify(item)] = result[JSON.stringify(item)] ? result[JSON.stringify(item)] + 1 : 1;
  });
  for (let [key, value] of Object.entries(result)) {
    if (value > 1) {
      duplicates.push(JSON.parse(key));
    };
  };
  load_coordinates(duplicates);

  return (
    <VictoryChart height={200} width={200} padding={30} containerComponent={<VictoryVoronoiContainer/>}>
      <VictoryAxis crossAxis
        width={200}
        height={200}
        domain={[-10, 10]}
        theme={VictoryTheme.material}
        offsetY={100}
        standalone={false}
        style={{
          grid: {stroke: "#ECEFF1", strokeDasharray},
          ticks: {stroke: "grey", size: 1},
          tickLabels: {fontSize: 3, padding: 1}
        }}
      />
      <VictoryAxis dependentAxis crossAxis
        width={200}
        height={200}
        domain={[-10, 10]}
        theme={VictoryTheme.material}
        offsetX={100}
        standalone={false}
        style={{
          grid: {stroke: "#ECEFF1", strokeDasharray},
          ticks: {stroke: "grey", size: 1},
          tickLabels: {fontSize: 3, padding: 1}
        }}
      />
      <VictoryGroup
        color="#54B520"
        labels={({ datum }) => `x: ${datum.x} y: ${datum.y}`}
        labelComponent={
          <VictoryTooltip style={{ fontSize: 3 }} 
            flyoutStyle={{ stroke: "#f8b195", strokeWidth: 1 }} 
            flyoutHeight={10} 
            flyoutWidth={15} 
            pointerLength={5} 
            pointerWidth={3}
          />
        }
        data={coordinates}
      >
        <VictoryLine animate={{duration: 500, onLoad: { duration: 500 }}} style={{data: { stroke: "#ffb6b6", strokeWidth: 1 }}} />
        <VictoryScatter style={{
                          data: {
                            fill: ({ datum }) => 
                              (datum.x === coordinates[Object.keys(coordinates).length-1].x && datum.y === coordinates[Object.keys(coordinates).length-1].y) 
                              || (datum.x === coordinates[0].x && datum.y === coordinates[0].y) 
                              ? "#004445" : "#aacfcf",
                            stroke: ({ datum }) => 
                              (datum.x === coordinates[Object.keys(coordinates).length-1].x && datum.y === coordinates[Object.keys(coordinates).length-1].y)
                              || (datum.x === coordinates[0].x && datum.y === coordinates[0].y)  
                              ? "#004445" : "#aacfcf",
                            fillOpacity: 0.75,
                            strokeWidth: 0.5
                          }
                        }}
                        size={({ active }) => active ? 2 : 1 }
          />
      </VictoryGroup>
    </VictoryChart>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PlotRoute);




