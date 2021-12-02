import * as actionTypes from '../actions/types/openWeatherActionTypes';

const initialState = {
  getWeatherByCityLoading: false,
  weatherByCityData: null,
};

const openWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER_BY_CITY: {
      return {
        ...state,
        getWeatherByCityLoading: true,
      };
    }
    case actionTypes.GET_WEATHER_BY_CITY_SUCCESS: {
      return {
        ...state,
        getWeatherByCityLoading: false,
        weatherByCityData: action.payload,
      };
    }
    case actionTypes.GET_WEATHER_BY_CITY_ERROR: {
      return {
        ...state,
        getWeatherByCityLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default openWeatherReducer;
