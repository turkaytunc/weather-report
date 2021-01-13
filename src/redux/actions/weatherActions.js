import { fetchWeatherData } from '../../util/fetchWeatherData';
import { WEATHER_FAIL, WEATHER_REQUEST, WEATHER_SUCCESS } from '../constants/weatherConstants';

export const fetchWeather = (location = { latitude: '41.667', longitude: '26.572' }) => async (dispatch) => {
  const weatherFetchUrl = {
    latitude: location.latitude,
    longitude: location.longitude,
    apiKey: process.env.REACT_APP_API_KEY,
    units: 'metric',
    language: 'tr',
  };

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
