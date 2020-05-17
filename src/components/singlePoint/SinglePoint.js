import React from 'react';
import './SinglePointStyles.css';

function SinglePoint({ id, x, y }) {
	return(
		<div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-3 point-style'>
			<span className='point-font'> ({x}, {y})</span>
		</div>
	);
}

export default SinglePoint;

