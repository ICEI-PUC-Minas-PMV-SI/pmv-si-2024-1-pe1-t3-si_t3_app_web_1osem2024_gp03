import { menuActive, getData, creatProgressBars } from "./utils.js";
setTimeout(menuActive, 100);

const setSummaryCardValue = (element, value) => {
  element.innerHTML = `R$ ${value}`;
};

const cards = {
  balance: {
    element: document.querySelector("#balance"),
    value: getData("balance") || 1234.56,
  },
  revenue: {
    element: document.querySelector("#revenue"),
    value: getData("revenue") || 7890.12,
  },
  expense: {
    element: document.querySelector("#expenses"),
    value: getData("expenses") || 3456.78,
  },
  creditCard: {
    element: document.querySelector("#credit-card"),
    value: getData("credit-card") || 9012.34,
  },
};

Object.values(cards).forEach(({ element, value }) => {
  setSummaryCardValue(element, value);
});

const mockTransactions = [
  {
    title: "Nike Air Force",
    date: "15/02/2024",
    value: -799.99,
    category: "Vestuário",
  },
  {
    title: "Salário",
    date: "15/02/2024",
    value: 3500.0,
    category: "Salário",
  },
  {
    title: "Supermercado",
    date: "15/02/2024",
    value: -350.0,
    category: "Alimentação",
  },
  {
    title: "Posto de gasolina",
    date: "15/02/2024",
    value: -100.0,
  },
  {
    title: "Aluguel",
    date: "15/02/2024",
    value: -1200.0,
  },
  {
    title: "Curso de inglês",
    date: "15/02/2024",
    value: -200.0,
  },
  {
    title: "Almoço",
    date: "15/02/2024",
    value: -50.0,
  },
  {
    title: "Lanche",
    date: "15/02/2024",
    value: -20.0,
  },
  {
    title: "Cinema",
    date: "15/02/2024",
    value: -40.0,
  },
  {
    title: "Uber",
    date: "15/02/2024",
    value: -30.0,
  },
];

const transactionsContainer = document.querySelector("#transactions-container");
const showTransactionSign = (value) => (value < 0 ? "-" : "+");

mockTransactions
  .slice(-6)
  .reverse()
  .forEach(({ title, date, value }) => {
    const transactionDiv = document.createElement("tr");
    transactionDiv.classList.add("transaction-row");
    transactionDiv.innerHTML = `
    <td><i class="category-ball green"></i></td>
    <td>${title}</td>
    <td>${date}</td>
    <td>${showTransactionSign(value)}R$ ${Math.abs(value).toFixed(2)}</td>
    `;

    transactionsContainer.appendChild(transactionDiv);
  });

// creatProgressBars();
