import { fetchWeatherData } from '../../util/fetchWeatherData';
import { WEATHER_FAIL, WEATHER_REQUEST, WEATHER_SUCCESS } from '../constants/weatherConstants';

const locations = [
  { name: 'Edirne', latitude: '41.676', longitude: '26.557' },
  { name: 'Istanbul', latitude: '41.028', longitude: '28.980' },
  { name: 'Ankara', latitude: '39.924', longitude: '32.841' },
  { name: 'New York', latitude: '40.677', longitude: '-73.967' },
  { name: 'Munich', latitude: '48.143', longitude: '11.570' },
  { name: 'Berlin', latitude: '52.511', longitude: '13.379' },
];

export const fetchWeather = (item) => async (dispatch) => {
  const loc = locations.filter((el) => el.name === item);

  const weatherFetchUrl = {
    latitude: loc[0].latitude,
    longitude: loc[0].longitude,
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
