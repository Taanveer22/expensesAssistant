console.log("script js connected");

// -------------------------------------------------
//event listener for calculate button
// -------------------------------------------------

const calculateButton = document.getElementById("calculate");
// console.log(calculateButton);

calculateButton.addEventListener("click", function () {
  // console.log("calculate button clicked");

  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  // console.log({ income, software, courses, internet });
  // console.dir({ income, software, courses, internet });
  // console.table({ income, software, courses, internet });

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  const resultsElement = document.getElementById("results");
  resultsElement.classList.remove("hidden");
});

// -------------------------------------------------
//event listener for calculate savings button
// -------------------------------------------------
const calculateSavingsButton = document.getElementById("calculate-savings");
// console.log(calculateSavingsButton);
calculateSavingsButton.addEventListener("click", function () {
  // console.log('savings button clicked');
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  console.table({ income, software, courses, internet });

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const savingsPercentageInput = parseFloat(
    document.getElementById("savings-percentage-input").value
  );
  // console.log(savingsPercentageInput);

  const savingsAmount = (savingsPercentageInput * balance) / 100;
  // console.log(savingsAmount);

  const savingsAmountElement = document.getElementById("savings-amount");
  savingsAmountElement.innerText = savingsAmount;

  const remainingBalance = balance - savingsAmount;
  const remainingBalanceElement = document.getElementById("remaining-balance");
  remainingBalanceElement.innerText = remainingBalance;
});
