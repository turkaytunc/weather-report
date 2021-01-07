import React from 'react';
import windIcon from '../../images/wind.png';
import './wind.scss';

const Wind = ({ windSpeed }) => {
  return (
    <div className="wind-container">
      <img src={windIcon} alt="wind" />
      <p>{(windSpeed * (36 / 10)).toPrecision(3)} km/sa</p>
    </div>
  );
};

export default Wind;
