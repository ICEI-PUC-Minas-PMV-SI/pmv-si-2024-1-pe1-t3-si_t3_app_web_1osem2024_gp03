import { menuActive, formatCurrency, convertToFloor } from './utils.js';
setTimeout(menuActive, 100);

document.addEventListener("DOMContentLoaded", function () {
    const saveTransaction = () => {
        const transactionType = document.getElementById('transaction-type').value;
        let value = document.getElementById(`${transactionType}-value`).value;
        const description = document.getElementById(`${transactionType}-description`).value;
        const category = document.getElementById(`${transactionType}-category`).value;
        const isNewCategory = document.getElementById(`${transactionType}-check-new-category`).checked;
        const newCategory = isNewCategory ? document.getElementById(`${transactionType}-input-new-category`).value : '';

        value = convertToFloor(value);
        const entry = {
            value: transactionType == 'income' ? value : value == 0 ? 0 : -1 * value,
            description: description,
            category: isNewCategory ? newCategory : category
        };

        const isInstallment = document.getElementById(`expense-check-installments`).checked;
        if (isInstallment) {
            const installments = document.getElementById(`expense-input-installments`).value;
            for (let index = 0; index < installments; index++) {
                let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
                transactions.push(entry);
                localStorage.setItem('transactions', JSON.stringify(transactions));
            }
        } else {
            let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
            transactions.push(entry);
            localStorage.setItem('transactions', JSON.stringify(transactions));
        }

        document.getElementById('income-form').reset();
        document.getElementById('expense-form').reset();
        alert('Transação salva com sucesso!')
    };

    document.getElementById('income-form').addEventListener('reset', function (event) {
        document.getElementById('income-input-new-category').disabled = true;
    });

    document.getElementById('expense-form').addEventListener('reset', function (event) {
        document.getElementById('expense-input-new-category').disabled = true;
    });

    document.getElementById('income-check-new-category').addEventListener('change', function () {
        const newCategoryInput = document.getElementById('income-input-new-category');
        newCategoryInput.disabled = !this.checked;
        newCategoryInput.value = '';
    });

    document.getElementById('expense-check-installments').addEventListener('change', function () {
        const installmentsInput = document.getElementById('expense-input-installments');
        installmentsInput.disabled = !this.checked;
        installmentsInput.value = '';
    });

    document.getElementById('expense-check-new-category').addEventListener('change', function () {
        const newCategoryInput = document.getElementById('expense-input-new-category');
        newCategoryInput.disabled = !this.checked;
        newCategoryInput.value = '';
    });

    const incomeValueInput = document.getElementById('income-value');
    const buttonIncomeSave = document.getElementById('income-button-save');

    const expenseValueInput = document.getElementById('expense-value');
    const buttonExpenseSave = document.getElementById('expense-button-save');

    const buttonTransactionSave = document.getElementById('transaction-button-save');

    incomeValueInput.addEventListener('input', function (event) {
        let rawValue = event.target.value.replace(/\D/g, '');
        let formattedValue = formatCurrency(rawValue);
        event.target.value = formattedValue;
    });

    expenseValueInput.addEventListener('input', function (event) {
        let rawValue = event.target.value.replace(/\D/g, '');
        let formattedValue = formatCurrency(rawValue);
        event.target.value = formattedValue;
    });

    buttonIncomeSave.addEventListener('click', function (event) {
        const value = document.getElementById('income-value').value;
        const description = document.getElementById('income-description').value;
        const category = document.getElementById('income-category').value;
        const isNewCategory = document.getElementById('income-check-new-category').checked;
        const newCategory = isNewCategory ? document.getElementById('income-input-new-category').value : '';

        document.getElementById('financial-value').innerHTML = value;
        document.getElementById('financial-description').innerHTML = description;
        document.getElementById('financial-category').innerHTML = isNewCategory ? newCategory : category;
        document.getElementById('transaction-type').value = 'income';
    });

    buttonExpenseSave.addEventListener('click', function (event) {
        const value = document.getElementById('expense-value').value;
        const description = document.getElementById('expense-description').value;
        const category = document.getElementById('expense-category').value;
        const isNewCategory = document.getElementById('expense-check-new-category').checked;
        const newCategory = isNewCategory ? document.getElementById('expense-input-new-category').value : '';

        document.getElementById('financial-value').innerHTML = value;
        document.getElementById('financial-description').innerHTML = description;
        document.getElementById('financial-category').innerHTML = isNewCategory ? newCategory : category;
        document.getElementById('transaction-type').value = 'expense';
    });

    buttonTransactionSave.addEventListener('click', function (event) {
        saveTransaction();
    });

});

