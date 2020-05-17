import { combineReducers } from 'redux';
import inputdata_reducer from './inputData/inputData-reducer';
import coordinatesdata_reducer from './coordinatesData/coordinatesData-reducer';

export default combineReducers({
  inputData: inputdata_reducer,
  coordinatesData: coordinatesdata_reducer,
});