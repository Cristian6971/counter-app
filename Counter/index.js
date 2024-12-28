const countNumber = document.querySelector("#countNumber");
const buttons = document.querySelector(".buttons");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");

let count = 0;

function updateNumber() {
  countNumber.textContent = count;
}

decreaseBtn.addEventListener("click", function () {
  count--;
  updateNumber();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateNumber();
});

increaseBtn.addEventListener("click", function () {
  count++;
  updateNumber();
});

updateNumber();
