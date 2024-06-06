import { menuActive, getData, formatCurrency, convertToFloor } from './utils.js';
setTimeout(menuActive, 100);
const loggedUser = getData('user');
!loggedUser ? window.open('login.html', '_SELF') : null;

document.addEventListener("DOMContentLoaded", function () {
    const getElement = (id) => document.getElementById(id);

    const formatInputValue = (input) => {
        input.addEventListener('input', (event) => {
            let rawValue = event.target.value.replace(/\D/g, '');
            let formattedValue = formatCurrency(rawValue);
            event.target.value = formattedValue;
        });
    };

    formatInputValue(getElement('amount-loan'));
    formatInputValue(getElement('apply-value'));
    formatInputValue(getElement('interest-rate'));

    const simulateButton = document.querySelector('.btn-success');
    const loanInstallmentValue = document.getElementById('report-loan-installment-value');
    const loanAmountValue = document.getElementById('report-loan-amount');
    const loanInstallmentsValue = document.getElementById('report-loan-installments');
    const installmentValueExample = document.getElementById('report-installments-value-example');
    const interestAmountValue = document.getElementById('report-interest-amount');
    const loanAmountExampleValue = document.getElementById('report-loan-amount-example');
    const valueMinusApplyValueExample = document.getElementById('report-loan-value-minus-apply-value-example');

    simulateButton.addEventListener('click', function () {
        const totalValue = convertToFloor(document.getElementById('amount-loan').value) || 0;
        const downPayment = convertToFloor(document.getElementById('apply-value').value) || 0;
        const interestRate = convertToFloor(document.getElementById('interest-rate').value) || 0;
        const installments = parseInt(document.getElementById('installments').value) || 0;

        if (totalValue <= 0 || installments <= 0) {
            showToast('Por favor, insira valores válidos para o valor total e quantidade de parcelas.');
            return;
        }

        const loanAmount = totalValue - downPayment;
        const monthlyInterestRate = interestRate / 100;
        const monthlyInstallment = loanAmount * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), installments)) / (Math.pow((1 + monthlyInterestRate), installments) - 1);
        const totalPaid = monthlyInstallment * installments;
        const totalInterest = totalPaid - loanAmount;

        const formattedMonthlyInstallment = monthlyInstallment.toFixed(2).replace('.', ',');
        const formattedTotalPaid = totalPaid.toFixed(2).replace('.', ',');
        const formattedTotalInterest = totalInterest.toFixed(2).replace('.', ',');
        const formattedLoanAmount = loanAmount.toFixed(2).replace('.', ',');

        loanInstallmentValue.textContent = formattedMonthlyInstallment;
        loanAmountValue.textContent = formattedTotalPaid;
        loanInstallmentsValue.textContent = installments;
        installmentValueExample.textContent = formattedMonthlyInstallment;
        interestAmountValue.textContent = formattedTotalInterest;
        loanAmountExampleValue.textContent = formattedTotalPaid;
        valueMinusApplyValueExample.textContent = formattedLoanAmount;
    });
});
