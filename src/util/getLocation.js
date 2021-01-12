const locations = [
  { name: 'Edirne', latitude: '41.667', longitude: '26.572' },
  { name: 'İstanbul', latitude: '41.045', longitude: '28.992' },
  { name: 'Ankara', latitude: '39.924', longitude: '32.841' },
  { name: 'New York', latitude: '40.677', longitude: '-73.967' },
  { name: 'Munich', latitude: '48.143', longitude: '11.570' },
  { name: 'Berlin', latitude: '52.511', longitude: '13.379' },
  { name: 'Los Angeles', latitude: '34.040', longitude: '-118.240' },
  { name: 'Paris', latitude: '48.880', longitude: '2.357' },
  { name: 'Prague', latitude: '50.068', longitude: '14.450' },
  { name: 'Sofia', latitude: '42.681', longitude: '23.344' },
  { name: 'Rome', latitude: '41.904', longitude: '12.509' },
  { name: 'Barcelona', latitude: '41.402', longitude: '2.142' },
  { name: 'Baku', latitude: '40.383', longitude: '49.900' },
];

export const getLocation = (locationName) => locations.filter((el) => el.name === locationName);
