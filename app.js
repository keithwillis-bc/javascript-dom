document.getElementById("external-link").href = "http://www.google.com";

//Add a new link
let newAnchor = document.createElement("a");
newAnchor.href = "http://www.google.com";
newAnchor.text = "Google";

let firstParagraph = document.querySelector("p");

firstParagraph.append(newAnchor);

//Remove element
let h1 = document.querySelector("#intro-text");

h1.remove();

//move element
firstParagraph.parentElement.append(firstParagraph);

//innerHTML
firstParagraph.innerHTML += ' <a href="http://www.amazon.com">Amazon.com</a>';
