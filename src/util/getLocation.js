const locations = [
  { name: 'Edirne', latitude: '41.676', longitude: '26.557' },
  { name: 'Istanbul', latitude: '41.028', longitude: '28.980' },
  { name: 'Ankara', latitude: '39.924', longitude: '32.841' },
  { name: 'New York', latitude: '40.677', longitude: '-73.967' },
  { name: 'Munich', latitude: '48.143', longitude: '11.570' },
  { name: 'Berlin', latitude: '52.511', longitude: '13.379' },
];

export const getLocation = (locationName) => locations.filter((el) => el.name === locationName);
