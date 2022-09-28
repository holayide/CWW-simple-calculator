const userInput = document.querySelector(".userInput");
const options = document.querySelectorAll(".option");
const equals = document.getElementById("equals");
const results = document.querySelector(".results");
console.log(equals);

function doCalculation() {
  results.innerHTML = eval(userInput.value);
  userInput.value = "";
}
equals.addEventListener("click", doCalculation);

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (e) => {
    //   userInput.value = userInput.value + e.target.value;
    userInput.value += e.target.value;
  });
}
