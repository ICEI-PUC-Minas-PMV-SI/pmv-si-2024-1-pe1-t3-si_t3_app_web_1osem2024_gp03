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

export const toastHandle = (message, success = true) => {
  console.log();
  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");
  const toastText = document.querySelector(".toast-message");
  const toastHeaderELement = document.getElementsByClassName("toast-header");

  // Customize toast header
  toastHeaderELement[0].classList.remove(
    "bg-success",
    "bg-danger",
    "text-light",
  );
  toastHeaderELement[0].classList.add(
    success ? "bg-success" : "bg-danger",
    "text-light",
  );

  toastText.innerHTML = message;
  const toastBootstrap =
    bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();
};

const SelectAllBtn = () => {
  return document.querySelectorAll(".itemMenu");
};

const menu = () => {
  const menuBtns = SelectAllBtn();
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      setData("menuActive", btn.id);
    });
  });
};

setTimeout(menu, 1000);

export const menuActive = () => {
  const menuActive = getData("menuActive");
  if (!menuActive) return;
  const menuBtns = SelectAllBtn();
  menuBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  const activeBtn = document.querySelectorAll(`#${menuActive}`);
  activeBtn.forEach((btn) => {
    btn.classList.add("active");
  });
};

export const categoriesColors = {
  Casa: "rgba(255, 0, 4, 0.5)",
  Alimentação: "rgba(255, 99, 132, 0.5)",
  Transporte: "rgba(54, 162, 235, 0.5)",
  Educação: "rgba(255, 206, 86, 0.5)",
  Saúde: "rgba(75, 192, 192, 0.5)",
  Lazer: "rgba(153, 102, 255, 0.5)",
  "Cartão de Crédito": "rgba(255, 159, 64, 0.5)",
  Outros: "rgba(255, 159, 64, 0.5)",
};

export const creatProgressBars = () => {
  const loggedUser = getData("user");
  const goals = JSON.parse(getData(loggedUser)).goals;
  const progressContainer = document.querySelector(".progressContainer");
  const firstChild = progressContainer.firstElementChild;

  if (!goals?.length) {
    const noGoalsDiv = document.createElement("div");
    noGoalsDiv.className = "noGoals text-center";
    noGoalsDiv.textContent = "Nenhuma meta cadastrada";
    progressContainer.appendChild(noGoalsDiv);
    return;
  }

  while (progressContainer.firstChild) {
    progressContainer.removeChild(progressContainer.firstChild);
  }
  progressContainer.appendChild(firstChild);

  goals.forEach((goal) => {
    const progressBarDiv = document.createElement("div");
    progressBarDiv.className =
      "progressBar d-flex mb-3 justify-content-center align-items-center col-12";

    const goalNameSpan = document.createElement("span");
    goalNameSpan.className = "goalName me-1 text-center";
    goalNameSpan.textContent = goal.title;

    const progressDiv = document.createElement("div");
    progressDiv.className = "progress w-75 me-1 rounded-pill";

    const progressBarInnerDiv = document.createElement("div");
    progressBarInnerDiv.className = "progress-bar rounded-pill";
    progressBarInnerDiv.setAttribute("role", "progressbar");
    progressBarInnerDiv.setAttribute(
      "aria-valuenow",
      ((goal.current / goal.goal) * 100).toString(),
    ); // 50% hardcoded
    progressBarInnerDiv.setAttribute("aria-valuemin", "0");
    progressBarInnerDiv.setAttribute("aria-valuemax", "100");
    progressBarInnerDiv.style.width = `${(goal.current / goal.goal) * 100}%`;

    const progressBarSpan = document.createElement("span");
    progressBarSpan.className = "fw-bold";
    progressBarSpan.textContent = `${(goal.current / goal.goal) * 100}%`;

    progressBarInnerDiv.appendChild(progressBarSpan);

    progressDiv.appendChild(progressBarInnerDiv);

    const trashIcon = document.createElement("i");
    trashIcon.className = "trash fa-solid fa-trash-can";

    progressBarDiv.appendChild(goalNameSpan);
    progressBarDiv.appendChild(progressDiv);
    progressBarDiv.appendChild(trashIcon);

    const progressContainer = document.querySelector(".progressContainer");
    progressContainer.appendChild(progressBarDiv);
  });
};

export const retriveArticles = async () => {
  const response = await fetch("/src/db/articles.json");
  const articles = await response.json();
  return articles;
};

export const formatCurrency = (value) => {
  while (value.length < 3) {
    value = "0" + value;
  }

  let integerPart = value.slice(0, -2);
  let decimalPart = value.slice(-2);

  if (integerPart.length > 1) integerPart = parseInt(integerPart).toString();

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return integerPart + "," + decimalPart;
};

export const convertToFloor = (str) => {
  let removeMask = str.replace(/\./g, "");
  removeMask = removeMask.replace(/,/g, ".");

  return parseFloat(removeMask);
};
