let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let calBtn = document.getElementById("calBtn");
let resetBtn = document.getElementById("resetBtn");
let negValErr = document.getElementById("negVal");
let intAmt = document.getElementById("intAmt");
let priAmt = document.getElementById("priAmt");
let totalAmt = document.getElementById("totalAmt");
let popupBox = document.getElementById("popupBox");
let closePopupBtn = document.getElementById("closePopupBtn");

calBtn.addEventListener("click", () => {
  num1Value = Number(num1.value);
  num2Value = Number(num2.value);
  num3Value = Number(num3.value);

  if (!num1.value || !num2.value || !num3.value) {
    popupBox.style.display = "flex";
    return;
  }

  if (num1Value < 0 || num2Value < 0 || num3Value < 0) {
    negValErr.innerText = "Please enter positive values";
    negValErr.style.color = "red";
    negValErr.style.fontWeight = "bold";
    return;
  }

  let si = (num1Value * num2Value * num3Value) / 100;
  let total = num1Value + si;

  intAmt.style.display = "block";
  intAmt.textContent = "Interest Earned: " + si;
  priAmt.style.display = "block";
  priAmt.textContent = "Principal Amount: " + num1Value;

  totalAmt.style.display = "block";
  totalAmt.textContent = "Total Value: " + total;
});

closePopupBtn.addEventListener("click", () => {
  popupBox.style.display = "none";
});

resetBtn.addEventListener("click", () => {
  num1.value = "";
  num2.value = "";
  num3.value = "";
  negValErr.innerText = "";
  intAmt.style.display = "none";
  priAmt.style.display = "none";
  totalAmt.style.display = "none";
});
