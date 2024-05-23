export async function importHtmlFile(url, targetDiv = 'sidemenu') {
  const response = await fetch(url);
  const html = await response.text();

  const receiver = document.getElementById(targetDiv);
  receiver.innerHTML = html;
}

export const getData = (key) => {
  return localStorage.getItem(key);
};

export const setData = (key, value) => {
  localStorage.setItem(key, value);
};

export const hashPassword = async (password) => {
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

export const toastHandle = (message) => {
  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast');
  const toastText = document.querySelector('.toast-message');
  toastText.innerHTML = message;
  const toastBootstrap =
    bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();
};

const SelectAllBtn = () => {
  return document.querySelectorAll('.itemMenu');
};

const menu = () => {
  const menuBtns = SelectAllBtn();
  menuBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      setData('menuActive', btn.id);
    });
  });
};

setTimeout(menu, 1000);

export const menuActive = () => {
  const menuActive = getData('menuActive');
  console.log(menuActive);
  if (!menuActive) return;
  const menuBtns = SelectAllBtn();
  menuBtns.forEach((btn) => {
    console.log(btn.id);
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelectorAll(`#${menuActive}`);
  activeBtn.forEach((btn) => {
    btn.classList.add('active');
  });
};
