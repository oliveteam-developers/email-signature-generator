import * as actionTypes from './types/openWeatherActionTypes';
import Api from '../shared/api/OpenWeatherAPI';

export const getWeatherByCity = () => ({
  type: actionTypes.GET_WEATHER_BY_CITY,
});

export const getWeatherByCitySuccess = (data) => ({
  type: actionTypes.GET_WEATHER_BY_CITY_SUCCESS,
  payload: data,
});

export const getWeatherByCityError = () => ({
  type: actionTypes.GET_WEATHER_BY_CITY_SUCCESS,
});

export const fetchWeather = (queryParams) => {
  return (dispatch) => {
    dispatch(getWeatherByCity());
    return Api.get('/weather', {}, queryParams)
      .then((res) => {
        dispatch(getWeatherByCitySuccess(res.data));
      })
      .catch(() => {
        dispatch(getWeatherByCityError());
      });
  };
};
