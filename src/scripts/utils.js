const bcrypt = require('bcrypt');

export const getData = (key) => {
  return localStorage.getItem(key);
};

export const setData = (key, value) => {
  localStorage.setItem(key, value);
};

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

