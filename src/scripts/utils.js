// const bcrypt = require('bcrypt');
// import bcrypt from 'bcrypt';

export const getData = (key) => {
  return localStorage.getItem(key);
};

export const setData = (key, value) => {
  localStorage.setItem(key, value);
};

export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

export const hashPasswordd = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return hexString(hash);
};

function hexString(buffer) {
  const byteArray = new Uint8Array(buffer);
  const hexCodes = [...byteArray].map((value) => {
    const hexCode = value.toString(16);
    return hexCode.padStart(2, '0');
  });
  return hexCodes.join('');
}
