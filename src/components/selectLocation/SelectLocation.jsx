import SelectSearch from 'react-select-search';
import './select-location.scss';
import { useEffect, useState } from 'react';

const countries = [
  { name: 'Edirne', value: 'Edirne' },
  { name: 'Istanbul', value: 'Istanbul' },
];

export const SelectLocation = () => {
  const [data, setData] = useState('Edirne');

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <SelectSearch onChange={setData} options={countries} search placeholder="Select your country" />;
};
