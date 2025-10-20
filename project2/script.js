let heading = document.querySelector("h2");
let heading1 = document.querySelector("h1");

heading.innerText = heading.innerText + " from Apna Collage students"

let button = document.createElement("button");
button.innerText = "click here";
button.style.backgroundColor="red";
button.style.border="2px solid black";


heading1.before(button);





