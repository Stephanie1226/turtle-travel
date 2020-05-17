import { INPUT_DATA } from './inputData-constant.js';

export const load_input_data = (inputd) => {
	return {
		type: INPUT_DATA,
		payload: {
			input_data: inputd
		},
	}
}