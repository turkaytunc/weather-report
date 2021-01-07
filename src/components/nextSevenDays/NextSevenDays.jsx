import React from 'react';
import { useSelector } from 'react-redux';

const NextSevenDays = () => {
  const weather = useSelector((state) => state.weather);
  const { loading, error, data } = weather;

  return <div>Next Seven Days</div>;
};

export default NextSevenDays;
