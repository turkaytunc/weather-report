export const fetchWeatherData = async (fetch, { latitude, longitude, apiKey, units, language }) => {
  let parsedData = {};

  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=${units}&lang=${language}&appid=${apiKey}`
    );
    parsedData = await data.json();
  } catch (error) {
    console.log('Fetch Error' + error);
  }

  return parsedData;
};
