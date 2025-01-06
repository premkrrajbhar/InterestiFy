let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let calBtn = document.getElementById("calBtn");
let resetBtn = document.getElementById("resetBtn");
let intAmt = document.getElementById("intAmt");
let priAmt = document.getElementById("priAmt");
let totalAmt = document.getElementById("totalAmt");

calBtn.addEventListener("click", () => {
    num1Value = Number(num1.value);
    num2Value = Number(num2.value);
    num3Value = Number(num3.value);

    if (!num1Value || !num2Value || !num3Value) {
        alert("Please Enter All Details")
        return
    }

    let si = (num1Value * num2Value * num3Value) / 100;
    let total = num1Value + si;

    intAmt.style.display = "block";
    intAmt.textContent = "Interest Earned: " + si;
    priAmt.style.display = "block";
    priAmt.textContent = "Principal Amount: " + num1Value;

    totalAmt.style.display = "block";
    totalAmt.textContent = "Total Value: " + total;

})

resetBtn.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    num3.value = "";
    intAmt.style.display = "none";
    priAmt.style.display = "none";
    totalAmt.style.display = "none";

})
