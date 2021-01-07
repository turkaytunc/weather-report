import { fetchWeatherData } from '../../util/fetchWeatherData';
import { WEATHER_FAIL, WEATHER_REQUEST, WEATHER_SUCCESS } from '../constants/weatherConstants';

const weatherFetchUrl = {
  latitude: '41.5',
  longitude: '26.5',
  apiKey: process.env.REACT_APP_API_KEY,
  units: 'metric',
  language: 'tr',
};

export const fetchWeather = () => async (dispatch) => {
  try {
    dispatch({ type: WEATHER_REQUEST });

    const weather = await fetchWeatherData(window.fetch, weatherFetchUrl);
    dispatch({
      type: WEATHER_SUCCESS,
      payload: weather,
    });
  } catch (error) {
    dispatch({
      type: WEATHER_FAIL,
      payload: error,
    });
  }
};
