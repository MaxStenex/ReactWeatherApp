import { combineReducers } from 'redux';
import { default as weatherReducer } from './weatherReducer';
import { default as cityReducer } from './cityReducer';

export default combineReducers({
  weather: weatherReducer,
  city: cityReducer,
});
