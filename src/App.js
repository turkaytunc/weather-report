import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './redux/actions/weatherActions';

import './app.scss';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import { SelectLocation } from './components/selectLocation/SelectLocation';
import NextSixDays from './components/nextSixDays/NextSixDays';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState({ name: 'edirne', longitude: 26.556, latitude: 41.6772 });

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchWeather(location));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, location]);

  return (
    <div className="app">
      <SelectLocation setLocation={setLocation} />
      <CurrentWeather currentLocation={location} />
      <NextSixDays />
      <Footer />
    </div>
  );
}

export default App;
