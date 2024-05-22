import { hashPassword, setData, toastHandle } from './utils.js';

const register = async (e) => {
  const name = document.querySelector('.name').value;
  const lastname = document.querySelector('.lastname').value;
  const inputEmail = document.querySelector('#exampleInputEmail1').value;
  const inputPassword = document.querySelector('#exampleInputPassword1').value;
  const inputPasswordConfirm = document.querySelector(
    '#exampleInputPassword1Confirm'
  ).value;

  if (inputPassword !== inputPasswordConfirm) return 'Password mismatch';
  if (
    !inputEmail ||
    !inputPassword ||
    !inputPasswordConfirm ||
    !name ||
    !lastname
  )
    return 'empty fields';

  const hashedPassword = await hashPassword(inputPassword);

  setData(
    inputEmail,
    JSON.stringify({
      name: name,
      lastname: lastname,
      email: inputEmail,
      password: hashedPassword,
    })
  );

  window.open('login.html', '_self');
};

const callback = async (e) => {
  e.preventDefault();
  const hasError = await register(e);
  if (hasError === 'Password mismatch') {
    toastHandle('As senhas não coincidem.');
  } else if (hasError === 'empty fields') {
    toastHandle('Preencha todos os campos.');
  } else {
    setData('registered', true);
  }
};

const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', callback);
