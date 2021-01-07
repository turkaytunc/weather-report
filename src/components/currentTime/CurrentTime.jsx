import React from 'react';
import { convertWeatherDateToLocaleDate } from '../../util/convertWeatherDateToLocaleDate';
import { getDayOfWeek } from '../../util/getDayOfWeek';
import './current-time.scss';

const CurrentTime = ({ dt }) => {
  const gmt = convertWeatherDateToLocaleDate(dt);
  const gmtHours = gmt.getHours();
  const gmtMinutes = gmt.getMinutes();
  const gmtDay = gmt.getDay();
  const gmtFullDay = gmt.getTime();

  return (
    <div className="currenttime-container">
      {/* <div>{gmtFullDay}</div> */}
      <div className="currenttime-day-hours">
        <div>{getDayOfWeek(gmtDay)}</div>
        <div className="currenttime-hours">{`${gmtHours}:${gmtMinutes}`}</div>
      </div>
    </div>
  );
};

export default CurrentTime;
