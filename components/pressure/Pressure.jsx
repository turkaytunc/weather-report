import React from 'react';
import './pressure.scss';
import pressureIcon from '../../images/pressure.png';

const Pressure = ({ pressure }) => {
  return (
    <div className="pressure-container">
      <img src={pressureIcon} alt="humidity" />
      <p>{pressure} hPa</p>
    </div>
  );
};

export default Pressure;
