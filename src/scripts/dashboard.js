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

const transactions = JSON.parse(getData("transactions"));

const balanceValue = transactions
  .reduce((acc, { value }) => acc + value, 0)
  .toFixed(2);

const revenueValue = transactions
  .reduce((acc, { value }) => (value > 0 ? acc + value : acc), 0)
  .toFixed(2);

const expensesValue = transactions
  .reduce((acc, { value }) => (value < 0 ? acc + Math.abs(value) : acc), 0)
  .toFixed(2);

const creditCardValue = transactions
  .filter(({ category }) => category === "Cartão de Crédito")
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
  setSummaryCardValue(element, value);
});

const transactionsContainer = document.querySelector("#transactions-container");
const showTransactionSign = (value) => (value < 0 ? "-" : "+");
const expenses = transactions.filter(({ value }) => value < 0);

expenses
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

creatProgressBars();

document.addEventListener("DOMContentLoaded", function () {
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

      const text = `R$ ${expensesValue}`;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2.6;

      ctx.fillText(text, textX, textY);

      ctx.font = subFontSize + "px sans-serif";
      const subText = "Total";
      const subTextX = Math.round((width - ctx.measureText(subText).width) / 2);
      const subTextY = height / 2.1;

      ctx.fillText(subText, subTextX, subTextY);
      ctx.save();
    },
  });

  const ctx = document.getElementById("expenseDoughnutChart").getContext("2d");
  const expenseDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: Object.keys(categoriesColors),
      datasets: [
        {
          label: "Gastos por Categoria",
          data: [25, 15, 10, 20, 20, 10],
          backgroundColor: Object.values(categoriesColors),
          borderColor: Object.values(categoriesColors).map((color) =>
            color.replace("0.5", "1"),
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
        centerText: {
          text: "Total",
        },
      },
    },
  });
});
