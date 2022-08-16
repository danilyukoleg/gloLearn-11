const btn = document.getElementById("btn");
const btn2 = document.getElementById("e_btn");
const input = document.getElementById("text");
const square = document.getElementById("square");
const range = document.getElementById("range");
const span = document.getElementById("range-span");
const circle = document.getElementById("circle");

btn2.style.display = "none";

btn.addEventListener("click", function (e) {
  e.stopPropagation();
  square.style.backgroundColor = input.value;
  input.value = "";
});

range.addEventListener("input", function () {
  span.textContent = range.value;
  circle.style.width = range.value + "%";
  circle.style.height = range.value + "%";
});
