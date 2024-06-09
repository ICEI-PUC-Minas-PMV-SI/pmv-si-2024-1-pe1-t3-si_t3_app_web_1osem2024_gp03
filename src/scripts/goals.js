import {
  menuActive,
  getData,
  setData,
  toastHandle,
  creatProgressBars,
} from './utils.js';
setTimeout(menuActive, 100);

const loggedUser = getData('user');
const cleanBtnGoals = document.querySelector('.cleanBtnGoals');
const cleanBtnAdd = document.querySelector('.cleanBtnAdd');
const goalInputs = document.querySelectorAll('.goalFormItem');
const addGoalBtn = document.querySelectorAll('.addGoalBtn');
const creatGoalBtn = document.querySelector('.addGoal');
const selectGoal = document.querySelector('.selectGoal');
const saveToGoal = document.querySelector('.saveToGoal');

saveToGoal.addEventListener('click', () => {
  const data = JSON.parse(getData(loggedUser));
  const goal = data.goals.find((goal) => goal.title === selectGoal.value);
  goal.current =
    parseFloat(goal.current) +
    parseFloat(document.querySelector('.addGoalBtn').value);
  try {
    setData(loggedUser, JSON.stringify(data));
    toastHandle('Meta atualizada com sucesso.');
    creatProgressBars();
    clean(addGoalBtn);
  } catch (e) {
    toastHandle('Erro ao atualizar meta.', false);
  }
});

selectGoal.addEventListener('change', () => {
  const goals = JSON.parse(getData(loggedUser)).goals;
  const goalDate = goals.find((goal) => goal.title === selectGoal.value).date;
  const date = document.querySelector('.dateLimit');
  date.innerHTML = `Data limite: ${new Date(goalDate).toLocaleDateString()}`;
});

const clean = (arr) => {
  arr.forEach((item) => {
    item.value = '';
  });
};

cleanBtnGoals.addEventListener('click', () => {
  clean(goalInputs);
});

cleanBtnAdd.addEventListener('click', () => {
  clean(addGoalBtn);
});

creatGoalBtn.addEventListener('click', () => {
  addGoal(loggedUser);
});

const addGoal = (loggedUser) => {
  const goalInputs = document.querySelectorAll('.goalFormItem');
  const newGoals = JSON.parse(getData(loggedUser));
  if (!newGoals.goals) newGoals.goals = [];
  const newGoal = {
    goal: goalInputs[0].value,
    date: goalInputs[1].value,
    title: goalInputs[2].value,
    current: 0,
  };

  if (!newGoal.goal || !newGoal.date || !newGoal.title) {
    toastHandle('Preencha todos os campos.', false);
    return;
  }
  newGoals.goals.push(newGoal);
  try {
    setData(loggedUser, JSON.stringify(newGoals));
    toastHandle('Meta registrada com sucesso.');
    loadGoalsOptions();
    clean(goalInputs);
    creatProgressBars();
    createDeleteBtn();
  } catch (e) {
    toastHandle('Erro ao registrar meta.', false);
  }
};

const loadGoalsOptions = () => {
  const goals = JSON.parse(getData(loggedUser)).goals;
  const progressContainer = document.querySelector('.selectGoal');
  const firstChild = progressContainer.firstElementChild;

  while (progressContainer.firstChild) {
    progressContainer.removeChild(progressContainer.firstChild);
  }
  progressContainer.appendChild(firstChild);

  goals?.forEach((goal) => {
    const goalOption = document.createElement('option');
    goalOption.value = goal.title;
    goalOption.innerText = goal.title;
    selectGoal.appendChild(goalOption);
  });
};
loadGoalsOptions();
creatProgressBars();

const createDeleteBtn = () => {
  const trashIcon = document.querySelectorAll('.trash');
  trashIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const goalTitle =
        e.target.previousElementSibling.previousElementSibling.textContent;
      const data = JSON.parse(getData(loggedUser));
      data.goals = data.goals.filter((goal) => goal.title !== goalTitle);
      try {
        setData(loggedUser, JSON.stringify(data));
        toastHandle('Meta excluída com sucesso.');
        creatProgressBars();
        loadGoalsOptions();
        createDeleteBtn();
      } catch (e) {
        toastHandle('Erro ao excluir meta.', false);
      }
    });
  });
};

createDeleteBtn();
