const calculateSum = document.getElementById("calculateSum");
const highlightLinks = document.querySelector("#highlight-links button");
const userDataButton = document.querySelector("#user-data button");
const stats = document.querySelector("#statistics button");

const userData = {
  firstName: "Keith",
  lastName: "Willis",
  age: 47,
};

calculateSum.addEventListener("click", () => {
  const userNumber = document.getElementById("user-number");
  const calculatedSum = document.getElementById("calculated-sum");
  let number = userNumber.value;
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }

  calculatedSum.textContent = sum;
  calculatedSum.style.display = "block";
});

highlightLinks.addEventListener("click", () => {
  const links = document.querySelectorAll("#highlight-links a");

  for (const link of links) {
    link.classList.add("highlight");
  }
});

userDataButton.addEventListener("click", () => {
  const userDataOutput = document.getElementById("output-user-data");

  userDataOutput.innerHTML = "";

  for (const prop in userData) {
    let li = document.createElement("li");
    li.textContent = prop.toUpperCase + ": " + userData[prop];
    userDataOutput.append(li);
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

stats.addEventListener("click", () => {
  const targetNumber = document.getElementById("user-target-number");
  const diceRolls = document.getElementById("dice-rolls");
  const totalRolls = document.getElementById("output-total-rolls");
  const targetNumberOutput = document.getElementById("output-target-number");

  let rolls = 0;
  let rolledNumber = 0;

  diceRolls.innerHTML = "";
  do {
    rolledNumber = getRandomNumber();
    rolls++;
    let li = document.createElement("li");
    li.textContent = "You rolled a " + rolledNumber;
    diceRolls.append(li);
  } while (targetNumber.value != rolledNumber);

  totalRolls.textContent = rolls;
  targetNumberOutput.textContent = targetNumber.value;
});
