const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// a function that convert a decimal to binaey number
const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = []; // hasil bagi
  const remainders = []; // sisa (sisa bagi)

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);

    input = quotient; // to avoid infinite loop
  }

  console.log("Inputs: ", inputs);
  ~console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
};

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

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", userCheckInput);

// users no longer need for click the convert btn, just pressed the Enter/Return kerword
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userCheckInput();
  }
});
