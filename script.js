var gradient = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

function setb() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  gradient.textContent = body.style.background;
}

setb();

color1.addEventListener("input", setb);

color2.addEventListener("input", setb);
