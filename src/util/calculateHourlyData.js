import { convertWeatherDateToLocaleDate } from './convertWeatherDateToLocaleDate';

export const calculateHourlyData = (data) =>
  data.map((el) => {
    const gmt = convertWeatherDateToLocaleDate(el.dt);
    const gmtHour = gmt.getHours() < 10 ? '0' + gmt.getHours() : gmt.getHours();
    const gmtMin = gmt.getMinutes() < 10 ? '0' + gmt.getMinutes() : gmt.getMinutes();
    const timeStamp = `${gmtHour}:${gmtMin}`;
    const fixedTemp = el.temp.toFixed(2);
    return {
      timeStamp: timeStamp,
      temperature: fixedTemp,
    };
  });
