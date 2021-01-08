import React from 'react';
import './weather-description.scss';

const WeatherDescription = ({ desc, iconCode = '10d' }) => {
  return (
    <div className="weather-description-container">
      <div>
        <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt="" />
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default WeatherDescription;
