function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const expenses = parseFloat(document.getElementById('expenses').value) || 0;
    const budget = income - expenses;
    document.getElementById('result').textContent = budget.toFixed(2);
}