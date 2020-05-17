import { COORDINATES_DATA } from './coordinatesData-constant.js';

export const load_coordinates = (inputc) => {
	return {
		type: COORDINATES_DATA,
		payload: {
			coordinates_data: inputc
		},
	}
}