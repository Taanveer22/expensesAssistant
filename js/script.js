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
  console.table({ income, software, courses, internet });

  const totalExpenses = software + courses + internet;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById("total-expenses");
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = balance.toFixed(2);

  // show results section
  const resultsElement = document.getElementById("results");
  resultsElement.classList.remove("hidden");

  // dynamic ui in histoy list container
  const historyListContainer = document.getElementById(
    "history-list-container"
  );
  const historyItemsDiv = document.createElement("div");
  historyItemsDiv.className =
    "bg-white p-3 rounded-md border-l-2 border-indigo-500";
  historyItemsDiv.innerHTML = `
        <p class = "text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class = "text-xs text-gray-500">Income : ${income.toFixed(2)}</p>
        <p class = "text-xs text-gray-500">Expenses : ${totalExpenses.toFixed(
          2
        )}</p>
        <p class = "text-xs text-gray-500">Balance : ${balance.toFixed(2)}</p>
    `;

  historyListContainer.insertBefore(
    historyItemsDiv,
    historyListContainer.firstChild
  );
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
  savingsAmountElement.innerText = savingsAmount.toFixed(2);

  const remainingBalance = balance - savingsAmount;
  const remainingBalanceElement = document.getElementById("remaining-balance");
  remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});

// history and assistant tab functionality
const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");

historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.remove(
    "text-white",
    "font-semibold",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );

  // hide expense form section
  const expenseForm = document.getElementById("expense-form");
  expenseForm.classList.add("hidden");

  // show history section
  const historySection = document.getElementById("history-section");
  historySection.classList.remove("hidden");
});
