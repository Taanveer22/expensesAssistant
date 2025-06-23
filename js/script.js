console.log("script js connected");

const calculateButton = document.getElementById("calculate");
// console.log(calculateButton);

calculateButton.addEventListener("click", function () {
  console.log("calculate button clicked");

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
});
