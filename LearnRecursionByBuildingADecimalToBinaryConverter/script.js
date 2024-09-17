const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {};

// Function to check the user input when click the convert btn
const userCheckInput = () => {
  // Baris kode yang mengecek apakah inputan user itu kosong, angka atau bukan
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  decimalToBinary(parseInt(decimalToBinary));
  numberInput.value = "";
};

convertBtn.addEventListener("click", userCheckInput);

// users no longer need for click the convert btn, just pressed the Enter/Return kerword
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userCheckInput();
  }
});
