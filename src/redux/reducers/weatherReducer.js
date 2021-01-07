import { WEATHER_SUCCESS, WEATHER_FAIL, WEATHER_REQUEST } from '../constants/weatherConstants';
import mockData from '../../util/mockData.json';

export const weatherReducer = (state = { loading: false, data: mockData }, action) => {
  switch (action.type) {
    case WEATHER_REQUEST: {
      return { loading: true, data: [] };
    }
    case WEATHER_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
      };
    }
    case WEATHER_FAIL: {
      return { loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
