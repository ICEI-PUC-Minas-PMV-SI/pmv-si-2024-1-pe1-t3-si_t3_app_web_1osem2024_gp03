export async function importHtmlFile(url, targetDiv = "sidemenu") {
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
  const hash = await crypto.subtle.digest("SHA-256", data);
  return hexString(hash);
};

function hexString(buffer) {
  const byteArray = new Uint8Array(buffer);
  const hexCodes = [...byteArray].map((value) => {
    const hexCode = value.toString(16);
    return hexCode.padStart(2, "0");
  });
  return hexCodes.join("");
}

export const toastHandle = (message) => {
  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");
  const toastText = document.querySelector(".toast-message");
  toastText.innerHTML = message;
  const toastBootstrap =
    bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();
};
