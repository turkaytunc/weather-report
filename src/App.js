// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather } from './redux/actions/weatherActions';

import './app.scss';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import { SelectLocation } from './components/selectLocation/SelectLocation';

function App() {
  // const dispatch = useDispatch();
  // const weather = useSelector((state) => state.weather);
  // const { loading, error, data } = weather;

  // useEffect(() => {
  //   let isMounted = true;

  //   if (isMounted) {
  //     dispatch(fetchWeather('hello'));
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [dispatch]);

  return (
    <div className="app">
      <SelectLocation />
      <CurrentWeather />
    </div>
  );
}

export default App;
