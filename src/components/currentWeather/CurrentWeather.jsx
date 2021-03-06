import React from 'react';
import { useSelector } from 'react-redux';
import CurrentTime from '../currentTime/CurrentTime';
import Humidity from '../humidity/Humidity';
import Pressure from '../pressure/Pressure';
import Temperature from '../temperature/Temperature';
import WeatherDescription from '../weatherDescription/WeatherDescription';
import Wind from '../wind/Wind';
import './current-weather.scss';

import LineChart from '../lineChart/LineChart';
import { calculateHourlyData } from '../../util/calculateHourlyData';

const CurrentWeather = ({ currentLocation }) => {
  const weather = useSelector((state) => state.weather);
  const { loading, error, data } = weather;

  const hourlyData = calculateHourlyData(weather.data?.hourly);

  return (
    <div className="current-weather-container">
      {loading ? (
        'Yükleniyor...'
      ) : error ? (
        'Error'
      ) : (
        <div
          style={{
            backgroundColor: '#e8eff3',
            boxShadow: '-1px 2px 4px rgba(0,0,0,0.3),1px -1px 4px rgba(0,0,0,0.3)',
            borderRadius: '3px',
          }}
        >
          <div className="current-weather-icon-container">
            <div className="current-location-text">{currentLocation.name}</div>
            <div className="current-weather-time-desc">
              <CurrentTime dt={data?.current?.dt} />
              <WeatherDescription
                desc={data?.current?.weather[0].description}
                iconCode={data?.current?.weather[0].icon}
              />
            </div>
            <div className="current-weather-details">
              <Temperature temp={data?.current?.temp} />
              <Humidity humidity={data?.current?.humidity} />
              <Wind windSpeed={data?.current?.wind_speed} />
              <Pressure pressure={data?.current?.pressure} />
            </div>
          </div>
          <LineChart
            timeStamps={hourlyData.map((el) => el.timeStamp).filter((el, i) => i % 3 === 0)}
            metric={hourlyData.map((el) => el.temperature).filter((el, i) => i % 3 === 0)}
          />
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
