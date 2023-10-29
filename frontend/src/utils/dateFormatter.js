export const formatISODate = (isoDateString) => {
  const date = new Date(isoDateString);
  const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(
    date.getMonth() + 1
  ).padStart(2, '0')}-${date.getFullYear()}`;
  return formattedDate;
};

export const formatISOTime = (isoDateString) => {
  const date = new Date(isoDateString);
  const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes()
  ).padStart(2, '0')}`;
  return formattedTime;
};
