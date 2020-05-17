import { COORDINATES_DATA } from './coordinatesData-constant.js';

const initialState = {
	coordinates_data: [],
}

const coordinatesdata_reducer = (state=initialState, action) => {
	switch(action.type) {
		case COORDINATES_DATA:
			return Object.assign({}, state, {coordinates_data: action.payload.coordinates_data});
		default:
			return state
	}
}

export default coordinatesdata_reducer;