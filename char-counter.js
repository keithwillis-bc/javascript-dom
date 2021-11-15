const productName = document.querySelector("#product-name");
const remainingChars = document.querySelector("#remaining-chars");

productName.addEventListener("input", (event) => {
  let charsRemaining = event.target.maxLength - event.target.value.length;
  remainingChars.textContent = charsRemaining;

  //use the chars remaining to add additional styles for the warning text
  if (charsRemaining === 0) {
    remainingChars.classList.add("error");
    productName.classList.add("error");
  } else if (charsRemaining <= 10) {
    remainingChars.classList.add("warning");
    productName.classList.add("warning");
    remainingChars.classList.remove("error");
    productName.classList.remove("error");
  } else {
    remainingChars.classList.remove("warning");
    productName.classList.remove("warning");
  }
});
