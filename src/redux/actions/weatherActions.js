import { fetchWeatherData } from '../../util/fetchWeatherData';
import { getLocation } from '../../util/getLocation';
import { WEATHER_FAIL, WEATHER_REQUEST, WEATHER_SUCCESS } from '../constants/weatherConstants';

export const fetchWeather = (item) => async (dispatch) => {
  const location = getLocation(item);

  const weatherFetchUrl = {
    latitude: location[0].latitude,
    longitude: location[0].longitude,
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
