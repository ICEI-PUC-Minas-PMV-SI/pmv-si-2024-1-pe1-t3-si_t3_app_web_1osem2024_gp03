import { categoriesColors, getData } from "./utils.js";

const user = getData('user')


const userData = JSON.parse(getData(user))



 const transactions = userData.transactions


const transactionsContainer = document.getElementById('transactions-container')

const showTransactionSign = (value) => (value < 0 ? "-" : "+");

transactions.forEach(({category, description, date, value})=>{ // Metodo de Array que percorre cada elemento da Array e executa uma função para cada um
   const transactionDiv = document.createElement('tr')
   transactionDiv.classList.add('transactionRow')
   transactionDiv.innerHTML = `
   <td><i class="category-ball" style="background-color: ${
     categoriesColors[category]
   }"></i></td>
   <td>${description}</td>
   <td>${date ?? "00/00/0000"}</td>
   <td>${showTransactionSign(value)}R$ ${Math.abs(value).toFixed(2)}</td>
   `
   transactionsContainer.appendChild(transactionDiv)
})

