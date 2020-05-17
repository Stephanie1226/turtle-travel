import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import SinglePoint from '../singlePoint/SinglePoint';
import './DuplicatePointsStyles.css';

const mapStateToProps = (state) => {
  return {
    coordinatesInfo: state.coordinatesData.coordinates_data
  }
};

function DuplicatePoints({coordinatesInfo}) {
	const [coor, setCoors] = useState([]);
	useEffect(() => {
    setCoors(coordinatesInfo);
  }, [coordinatesInfo]);

	return (
		<div>
			<div className="coor-title">
				<h3> Turtle passed by these coordinates more than once: </h3>
			</div>
			<div className="point-style">
				{
					coor && coor.map((points, i) => {
						return (
							<SinglePoint key={i} x={coor[i].x} y={coor[i].y} />
						);
					})
				}
			</div>
	  </div>
	);
} 

export default connect(mapStateToProps, null)(DuplicatePoints);

