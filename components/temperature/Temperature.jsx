import React from 'react';
import './temperature.scss';
import thermometerIcon from '../../images/thermometer.png';

const Temperature = ({ temp = 0.0 }) => {
  const fixedTemp = temp.toFixed(0);
  return (
    <div className="temperature-container">
      <img src={thermometerIcon} alt="humidity" />
      <p>{fixedTemp} °C</p>
    </div>
  );
};

export default Temperature;
