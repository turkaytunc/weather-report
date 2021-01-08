import React from 'react';
import { calculateCurrentDate } from '../../util/calculateCurrentDate';
import { convertWeatherDateToLocaleDate } from '../../util/convertWeatherDateToLocaleDate';
import { getDayOfWeek } from '../../util/getDayOfWeek';
import './current-time.scss';

const CurrentTime = ({ dt }) => {
  const gmt = convertWeatherDateToLocaleDate(dt);
  const gmtHours = gmt.getHours();
  const gmtMinutes = gmt.getMinutes();
  const gmtDay = gmt.getDay();
  const gmtFullDay = calculateCurrentDate(gmt);

  return (
    <div className="currenttime-container">
      <div>{gmtFullDay}</div>
      <div className="currenttime-day-hours">
        <div>{getDayOfWeek(gmtDay)}</div>
        <div className="currenttime-hours">{`${gmtHours}:${gmtMinutes}`}</div>
      </div>
    </div>
  );
};

export default CurrentTime;
