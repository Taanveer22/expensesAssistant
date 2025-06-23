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
});
