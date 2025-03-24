export const getStoreValue = (key) => {
  const value = localStorage.getItem(key);

  if (value === null) return null;

  return JSON.parse(value);
};

export const setStoreValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
