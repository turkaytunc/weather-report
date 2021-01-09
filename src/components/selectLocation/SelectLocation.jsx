import SelectSearch from 'react-select-search';
import './select-location.scss';

const countries = [
  { name: 'Edirne', value: 'Edirne' },
  { name: 'Istanbul', value: 'Istanbul' },
  { name: 'Ankara', value: 'Ankara' },
  { name: 'New York', value: 'New York' },
  { name: 'Munich', value: 'Munich' },
  { name: 'Berlin', value: 'Berlin' },
];

export const SelectLocation = ({ setLocation = () => null }) => {
  return <SelectSearch onChange={setLocation} options={countries} search placeholder="Select your country" />;
};
