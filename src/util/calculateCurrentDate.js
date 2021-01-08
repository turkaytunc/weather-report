const months = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

export const calculateCurrentDate = (gmt) => {
  const day = gmt.getDay() + 3;
  const mo = gmt.getMonth();
  const year = gmt.getFullYear();

  const dateString = `${day} ${months[mo]} ${year}`;

  return dateString;
};
