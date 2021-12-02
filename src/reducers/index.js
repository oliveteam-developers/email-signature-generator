import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import openWeatherReducer from './openWeatherReducer';

export default combineReducers({
  common: commonReducer,
  openWeather: openWeatherReducer,
});
