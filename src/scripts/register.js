import { hashPassword, setData } from './utils.js';

const register = async (e) => {
  e.preventDefault();

  const name = document.querySelector('.name').value;
  const lastname = document.querySelector('.lastname').value;
  const inputEmail = document.querySelector('#exampleInputEmail1').value;
  const inputPassword = document.querySelector('#exampleInputPassword1').value;
  const inputPasswordConfirm = document.querySelector(
    '#exampleInputPassword1Confirm'
  ).value;
  console.log(name, lastname, inputEmail, inputPassword, inputPasswordConfirm);
  if (inputPassword !== inputPasswordConfirm) return false;

  if (
    !inputEmail ||
    !inputPassword ||
    !inputPasswordConfirm ||
    !name ||
    !lastname
  )
    return false;
  const hashedPassword = await hashPassword(inputPassword);

  const user = {
    name: name,
    lastname: lastname,
    email: inputEmail,
    password: hashedPassword,
  };

  setData(inputEmail, JSON.stringify(user));

  window.open('login.html', '_self');
};

const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', register);
