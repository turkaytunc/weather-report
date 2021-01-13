import { useState } from 'react';
import './select-location.scss';

export const SelectLocation = ({ setLocation = () => null }) => {
  const [userInput, setUserInput] = useState('edirne');

  const handleLocation = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((data) => data.json())
      .then((data) => {
        const locationObj = { name: userInput, longitude: '0', latitude: '0' };
        locationObj.latitude = data.coord.lat;
        locationObj.longitude = data.coord.lon;
        setLocation(locationObj);
        console.log(locationObj);
      });
  };

  return (
    <div>
      <input onChange={(e) => setUserInput(e.target.value)} value={userInput} placeholder="Şehir ismi..(ingilizce)" />
      <button onClick={() => handleLocation()}>Veriyi Getir</button>
    </div>
  );
};
