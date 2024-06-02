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
    category: "Transporte",
  },
  {
    title: "Aluguel",
    date: "15/02/2024",
    value: -1200.0,
    category: "Casa",
  },
  {
    title: "Curso de inglês",
    date: "15/02/2024",
    value: -200.0,
    category: "Educação",
  },
  {
    title: "Almoço",
    date: "15/02/2024",
    value: -50.0,
    category: "Alimentação",
  },
  {
    title: "Lanche",
    date: "15/02/2024",
    value: -20.0,
    category: "Alimentação",
  },
  {
    title: "Cinema",
    date: "15/02/2024",
    value: -40.0,
    category: "Lazer",
  },
  {
    title: "Uber",
    date: "15/02/2024",
    value: -30.0,
    category: "Transporte",
  },
];

const transactionsContainer = document.querySelector("#transactions-container");
const showTransactionSign = (value) => (value < 0 ? "-" : "+");

const allExpensesValue = mockTransactions
  .reduce((acc, { value }) => {
    if (value < 0) return acc + Math.abs(value);
    return acc;
  }, 0)
  .toFixed(2);

mockTransactions
  .slice(-6)
  .reverse()
  .forEach(({ title, date, value, category }) => {
    const transactionDiv = document.createElement("tr");
    transactionDiv.classList.add("transaction-row");
    transactionDiv.innerHTML = `
    <td><i class="category-ball" style="background-color: ${
      categoriesColors[category]
    }"></i></td>
    <td>${title}</td>
    <td>${date}</td>
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

      const text = `R$ ${allExpensesValue}`;
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
      labels: [
        "Casa",
        "Alimentação",
        "Transporte",
        "Educação",
        "Saúde",
        "Lazer",
        "Outros",
      ],
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
