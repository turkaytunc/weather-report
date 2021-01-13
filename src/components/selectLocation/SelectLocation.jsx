import { useState } from 'react';
import './select-location.scss';

export const SelectLocation = ({ setLocation = () => null }) => {
  const [userInput, setUserInput] = useState('edirne');

  const handleLocation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
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
    <div className="search-container">
      <input
        tabIndex={0}
        className="search-input"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleLocation();
          }
        }}
        placeholder="Şehir ismi.."
      />
      <button className="search-button" onClick={() => handleLocation()}>
        Veriyi Getir
      </button>
    </div>
  );
};
