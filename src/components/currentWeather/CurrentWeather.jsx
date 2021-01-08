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

// "current": {
//     "dt": 1609681318,
//     "sunrise": 1609652433,
//     "sunset": 1609685767,
//     "temp": 12.22,
//     "feels_like": 10.05,
//     "pressure": 1008,
//     "humidity": 79,
//     "dew_point": 8.69,
//     "uvi": 0.04,
//     "clouds": 100,
//     "visibility": 10000,
//     "wind_speed": 2.68,
//     "wind_deg": 140,
//     "wind_gust": 4.47,
//     "weather": [
//     {
//     "id": 500,
//     "main": "Rain",
//     "description": "hafif yağmur",
//     "icon": "10d"
//     }
//     ],
//     "rain": {
//     "1h": 0.11
//     }
//     }

const CurrentWeather = () => {
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
        <div>
          <div className="current-weather-icon-container">
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
