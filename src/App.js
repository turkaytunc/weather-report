import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/actions/weatherActions';

import './app.scss';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import { SelectLocation } from './components/selectLocation/SelectLocation';
import NextSixDays from './components/nextSixDays/NextSixDays';

function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const { loading, error, data } = weather;

  const [location, setLocation] = useState('Edirne');

  // useEffect(() => {
  //   let isMounted = true;

  //   if (isMounted) {
  //     dispatch(fetchWeather(location));
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [dispatch, location]);

  return (
    <div className="app">
      <SelectLocation setLocation={setLocation} />
      <CurrentWeather currentLocation={location} />
      <NextSixDays />
    </div>
  );
}

export default App;
