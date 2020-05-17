import { INPUT_DATA } from './inputData-constant.js';

const initialState = {
	input_data: '',
}

const inputdata_reducer = (state=initialState, action) => {
	switch(action.type) {
		case INPUT_DATA:
			return Object.assign({}, state, {input_data: action.payload.input_data});
		default:
			return state
	}
}

export default inputdata_reducer;