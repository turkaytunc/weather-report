import React from 'react';
import humidityIcon from '../../images/humidity.png';
import './humidity.scss';

const Humidity = ({ humidity }) => {
  return (
    <div className="humidity-container">
      <img src={humidityIcon} alt="humidity" />
      <p>% {humidity}</p>
    </div>
  );
};

export default Humidity;
