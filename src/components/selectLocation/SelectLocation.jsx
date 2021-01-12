import SelectSearch from 'react-select-search';
import './select-location.scss';

const countries = [
  { name: 'Edirne', value: 'Edirne' },
  { name: 'İstanbul', value: 'İstanbul' },
  { name: 'Ankara', value: 'Ankara' },
  { name: 'New York', value: 'New York' },
  { name: 'Munich', value: 'Munich' },
  { name: 'Berlin', value: 'Berlin' },
  { name: 'Los Angeles', value: 'Los Angeles' },
  { name: 'Paris', value: 'Paris' },
  { name: 'Prague', value: 'Prague' },
  { name: 'Sofia', value: 'Sofia' },
  { name: 'Rome', value: 'Rome' },
  { name: 'Barcelona', value: 'Barcelona' },
  { name: 'Baku', value: 'Baku' },
];

export const SelectLocation = ({ setLocation = () => null }) => {
  return <SelectSearch onChange={setLocation} options={countries} search placeholder="Şehir seç.." />;
};
