import { getData, hashPassword } from './utils.js';

const login = async (e) => {
  let inputEmail = document.querySelector('#exampleInputEmail1').value;
  let inputPassword = document.querySelector('#exampleInputPassword1').value;

  const { password } = JSON.parse(getData(inputEmail));
  console.log(password);
  if (!password) return false;

  const hashedInput = await hashPassword(inputPassword);
  if (hashedInput !== password) return false;

  window.open('dashboard.html', '_self');
};

const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', login);
