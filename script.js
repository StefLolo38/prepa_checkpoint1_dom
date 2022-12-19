const p1 = document.querySelector(".container-header p");
const heading = document.querySelector("h1");
const redButton = document.querySelector(".red-button");

redButton.addEventListener("click", function () {
  p1.innerHTML = "Chez Marco";

  heading.style.color = "green";
});
