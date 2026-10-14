let mijndivs2 = document.querySelector("#mijndivs2");
mijndivs2.style.backgroundColor = "blue";
mijndivs2.style.fontFamily = "arial";

function zegHallo() {
antwoord.innerHTML = "Hellooo!";
antwoord.style.backgroundColor = "blue";
}

let knop = document.querySelector("#knop");
knop.addEventListener("click", zegHallo);

let hour = 9;
if (hour < 12) {
  console.log("Good morning");
} else if (hour < 17) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}
