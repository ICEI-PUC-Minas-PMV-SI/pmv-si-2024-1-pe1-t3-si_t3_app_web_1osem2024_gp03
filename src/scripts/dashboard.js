import {
  menuActive,
  getData,
  creatProgressBars,
  categoriesColors,
} from "./utils.js";

setTimeout(menuActive, 100);

const setSummaryCardValue = (element, value) => {
  element.innerHTML = `R$ ${value}`;
};

const defaultCardValue = "00,00";

const loggedUser = getData("user");
const transactions = JSON.parse(getData(loggedUser)).transactions;

const balanceValue = transactions
  ?.reduce((acc, { value }) => acc + value, 0)
  .toFixed(2);

const revenueValue = transactions
  ?.reduce((acc, { value }) => (value > 0 ? acc + value : acc), 0)
  .toFixed(2);

const expensesValue = transactions
  ?.reduce((acc, { value }) => (value < 0 ? acc + Math.abs(value) : acc), 0)
  .toFixed(2);

const creditCardValue = transactions
  ?.filter(({ category }) => category === "Cartão de Crédito")
  .reduce((acc, { value }) => acc + Math.abs(value), 0)
  .toFixed(2);

const cards = {
  balance: {
    element: document.querySelector("#balance"),
    value: balanceValue,
  },
  revenue: {
    element: document.querySelector("#revenue"),
    value: revenueValue,
  },
  expense: {
    element: document.querySelector("#expenses"),
    value: expensesValue,
  },
  creditCard: {
    element: document.querySelector("#credit-card"),
    value: creditCardValue,
  },
};

Object.values(cards).forEach(({ element, value }) => {
  setSummaryCardValue(element, value ?? defaultCardValue);
});

const expenses = transactions?.filter(({ value }) => value < 0);

const transactionsContainer = document.querySelector("#transactions-container");
const showTransactionSign = (value) => (value < 0 ? "-" : "+");

if (transactions?.length) {
  transactions
    .slice(-6)
    .reverse()
    .forEach(({ description, date, value, category }) => {
      const transactionDiv = document.createElement("tr");
      transactionDiv.classList.add("transaction-row");
      transactionDiv.innerHTML = `
    <td><i class="category-ball" style="background-color: ${
      categoriesColors[category]
    }"></i></td>
    <td>${description}</td>
    <td>${date ?? "00/00/0000"}</td>
    <td>${showTransactionSign(value)}R$ ${Math.abs(value).toFixed(2)}</td>
    `;

      transactionsContainer.appendChild(transactionDiv);
    });
} else {
  const noTransactionsMessage = document.createElement("tr");
  noTransactionsMessage.classList.add("no-transactions-message");
  noTransactionsMessage.innerHTML = `
  <td colspan="4" class="no-transactions-message">
    Não há transações recentes
  </td>
  `;
  transactionsContainer.appendChild(noTransactionsMessage);
}

creatProgressBars();

const getPercentagesByCategory = (expenses, expensesValue) => {
  const categories = expenses.reduce((acc, { category, value }) => {
    acc[category] = acc[category]
      ? acc[category] + Math.abs(value)
      : Math.abs(value);
    return acc;
  }, {});

  return Object.values(categories).map(
    (value) => +((value / expensesValue) * 100).toFixed(2),
  );
};

const getExistingExpensesCategories = (expenses) => {
  return expenses?.reduce((acc, { category }) => {
    if (!acc.includes(category)) acc.push(category);
    return acc;
  }, []);
};

const getExistingExpensesCategoriesColors = (expenses) => {
  return getExistingExpensesCategories(expenses)?.map(
    (category) => categoriesColors[category],
  );
};

document.addEventListener("DOMContentLoaded", function () {
  const expensesCreated = expenses?.length > 0;

  Chart.register({
    id: "centerText",
    afterDatasetsDraw: function (chart) {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;

      ctx.restore();

      const mainFontSize = (height / 12).toFixed(2);
      const subFontSize = (height / 18).toFixed(2);

      ctx.font = mainFontSize + "px sans-serif";
      ctx.textBaseline = "middle";

      const text = expensesCreated ? `R$ ${expensesValue}` : "Nenhuma despesa";
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2.4;

      ctx.fillText(text, textX, textY);

      ctx.font = subFontSize + "px sans-serif";
      const subText = expensesCreated
        ? "Total"
        : "Novas despesas serão exibidas aqui";
      const subTextX = Math.round((width - ctx.measureText(subText).width) / 2);
      const subTextY = height / 2;

      ctx.fillText(subText, subTextX, subTextY);
      ctx.save();
    },
  });

  const ctx = document.getElementById("expenseDoughnutChart").getContext("2d");

  const expenseDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: expensesCreated && getExistingExpensesCategories(expenses),
      datasets: [
        {
          label: "Gastos por Categoria",
          data:
            expensesCreated &&
            getPercentagesByCategory(expenses, expensesValue),
          backgroundColor: getExistingExpensesCategoriesColors(expenses),
          borderColor: getExistingExpensesCategoriesColors(expenses)?.map(
            (color) => color?.replace("0.5", "1"),
          ),
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "80%",
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              if (label) label += ": ";

              label += context.raw + "%";
              return label;
            },
          },
        },
      },
    },
  });
});
