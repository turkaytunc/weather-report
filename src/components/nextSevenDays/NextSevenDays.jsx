import React from 'react';
import { useSelector } from 'react-redux';
import { calculateCurrentDate } from '../../util/calculateCurrentDate';
import { convertWeatherDateToLocaleDate } from '../../util/convertWeatherDateToLocaleDate';
import Humidity from '../humidity/Humidity';
import Pressure from '../pressure/Pressure';
import Temperature from '../temperature/Temperature';
import Wind from '../wind/Wind';
import './next-six-days.scss';

const NextSixDays = () => {
  const weather = useSelector((state) => state.weather);
  const { loading, error, data } = weather;

  const weatherData = data?.daily
    ?.map((e) => {
      const gmt = convertWeatherDateToLocaleDate(e.dt);
      const timeString = calculateCurrentDate(gmt);
      return {
        timeString,
        temp: e.temp?.day,
        humidity: e.humidity,
        pressure: e.pressure,
        wind: e.wind_speed,
        icon: e.weather.icon,
      };
    })
    .slice(1);

  return (
    <div>
      {loading ? (
        'Yükleniyor...'
      ) : error ? (
        'Error'
      ) : (
        <div className="daily-weather-grid-container">
          {weatherData.map((e) => (
            <div className="daily-weather-item">
              <div className="daily-weather-time">{e.timeString}</div>
              <div className="daily-weather-icons">
                <Temperature temp={e.temp} />
                <Wind windSpeed={e.wind} />
                <Pressure pressure={e.pressure} />
                <Humidity humidity={e.humidity} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NextSixDays;
