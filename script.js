const btn = document.getElementById("btn");
const btn2 = document.getElementById("e_btn");
const input = document.getElementById("text");
const square = document.getElementById("square");
const range = document.getElementById("range");
const span = document.getElementById("range-span");
const circle = document.getElementById("circle");

btn2.style.display = "none";
circle.style.width = 50 + "%";
circle.style.height = 50 + "%";
span.textContent = 50;

btn.addEventListener("click", function (e) {
  e.stopPropagation();
  square.style.backgroundColor = input.value;
  input.value = "";
});

range.addEventListener("input", function () {
  span.textContent = this.value;
  circle.style.width = this.value + "%";
  circle.style.height = this.value + "%";
});
