let button;
let button1;

button = document.getElementById("cssButton0");

button1 = document.getElementById("cssButton1");

function addAnimation() {
  button.classList.add("active");
}

function formInvalid() {
  button1.classList.add("active-invalid");
}
