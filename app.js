let paragraphElement = document.querySelector("p");

paragraphElement.addEventListener("click", (event) => {
  event.target.textContent = "Clicked";
});

let inputElement = document.querySelector("input");

inputElement.addEventListener("input", (event) => {
  paragraphElement.textContent = event.target.value;
});
