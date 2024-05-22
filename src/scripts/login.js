import { getData, hashPassword, setData, toastHandle } from './utils.js';

if (getData('registered') === 'true') {
  toastHandle('Cadastro realizado com sucesso.');
  setData('registered', false);
}

const login = async () => {
  let inputEmail = document.querySelector('#exampleInputEmail1').value;
  let inputPassword = document.querySelector('#exampleInputPassword1').value;

  const password = JSON.parse(getData(inputEmail))?.password;
  if (!password) return false;

  const hashedInput = await hashPassword(inputPassword);
  if (hashedInput !== password) return false;

  window.open('dashboard.html', '_self');
};

const callback = async (e) => {
  e.preventDefault();
  const message = await login();
  if (!message) toastHandle('Email ou senha incorreto.');
};

const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', callback);
