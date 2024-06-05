import { menuActive, formatCurrency, convertToFloor, getData, toastHandle } from './utils.js';

setTimeout(menuActive, 100);
const loggedUser = getData('user');
!loggedUser ? window.open('login.html', '_SELF') : null;

document.addEventListener("DOMContentLoaded", function () {
    const getElement = (id) => document.getElementById(id);

    const toggleInputState = (checkbox, input) => {
        input.disabled = !checkbox.checked;
        input.value = '';
    };

    const formatInputValue = (input) => {
        input.addEventListener('input', (event) => {
            let rawValue = event.target.value.replace(/\D/g, '');
            let formattedValue = formatCurrency(rawValue);
            event.target.value = formattedValue;
        });
    };

    const resetForm = (formId, newCategoryInputId) => {
        getElement(formId).addEventListener('reset', () => {
            getElement(newCategoryInputId).disabled = true;
        });
    };

    const handleNewCategoryToggle = (checkboxId, inputId) => {
        getElement(checkboxId).addEventListener('change', function () {
            toggleInputState(this, getElement(inputId));
        });
    };

    const displayTransactionDetails = (value, description, category) => {
        getElement('financial-value').innerHTML = value;
        getElement('financial-description').innerHTML = description;
        getElement('financial-category').innerHTML = category;
    };

    const prepareTransaction = (type) => {
        const value = getElement(`${type}-value`).value;
        const description = getElement(`${type}-description`).value;
        const category = getElement(`${type}-category`).value;
        const isNewCategory = getElement(`${type}-check-new-category`).checked;
        const newCategory = isNewCategory ? getElement(`${type}-input-new-category`).value : '';

        displayTransactionDetails(value, description, isNewCategory ? newCategory : category);
        getElement('transaction-type').value = type;
    };

    const saveTransaction = () => {
        const transactionType = getElement('transaction-type').value;
        let value = getElement(`${transactionType}-value`).value;
        const description = getElement(`${transactionType}-description`).value;
        const category = getElement(`${transactionType}-category`).value;
        const isNewCategory = getElement(`${transactionType}-check-new-category`).checked;
        const newCategory = isNewCategory ? getElement(`${transactionType}-input-new-category`).value : '';

        if (!value || !description || category == 'Selecione uma categoria' && !newCategory) {
            toastHandle('O valor, a descrição e a categoria são campos obrigatórios', false);
            return false;
        }
        value = convertToFloor(value);
        const entry = {
            value: transactionType == 'income' ? value : value == 0 ? 0 : -1 * value,
            description,
            category: isNewCategory ? newCategory : category
        };

        const isInstallment = getElement(`expense-check-installments`).checked;
        let userData = JSON.parse(localStorage.getItem(loggedUser));
        const transactions = userData.transactions || [];

        if (isInstallment) {
            const installments = getElement(`expense-input-installments`).value;
            for (let index = 0; index < installments; index++) {
                transactions.push(entry);
            }
        } else {
            transactions.push(entry);
        }

        userData.transactions = transactions;
        localStorage.setItem(loggedUser, JSON.stringify(userData));

        getElement('income-form').reset();
        getElement('expense-form').reset();
        toastHandle('Transação salva com sucesso!');
    };

    resetForm('income-form', 'income-input-new-category');
    resetForm('expense-form', 'expense-input-new-category');

    handleNewCategoryToggle('income-check-new-category', 'income-input-new-category');
    handleNewCategoryToggle('expense-check-new-category', 'expense-input-new-category');
    handleNewCategoryToggle('expense-check-installments', 'expense-input-installments');

    formatInputValue(getElement('income-value'));
    formatInputValue(getElement('expense-value'));

    getElement('income-button-save').addEventListener('click', () => {
        prepareTransaction('income');
    });

    getElement('expense-button-save').addEventListener('click', () => {
        prepareTransaction('expense');
    });

    getElement('transaction-button-save').addEventListener('click', saveTransaction);
});
