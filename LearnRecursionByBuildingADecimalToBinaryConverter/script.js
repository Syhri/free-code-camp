const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
  },
];

// a function that convert a decimal to binaey number
const decimalToBinary = (input) => {
  //* First Algorithm: Excessive Memory Usage, Inefficient
  // const inputs = [];
  // const quotients = []; // hasil bagi
  // const remainders = []; // sisa (sisa bagi)

  // if (input === 0) {
  //   result.innerText = "0";
  //   return;
  // }

  // while (input > 0) {
  //   const quotient = Math.floor(input / 2);
  //   const remainder = input % 2;
  //   inputs.push(input);
  //   quotients.push(quotient);
  //   remainders.push(remainder);

  //   input = quotient; // to avoid infinite loop
  // }

  // console.log("Inputs: ", inputs);
  // console.log("Quotients: ", quotients);
  // console.log("Remainders: ", remainders);

  // result.innerText = remainders.reverse().join("");*/

  //* Second Algorithm: More Efficient, Iterative, No Additional Memory
  // let binary = "";

  // if (input === 0) {
  //   binary = "0";
  // }

  // while (input > 0) {
  //   binary = (input % 2) + binary;
  //   input = Math.floor(input / 2);
  // }

  // result.innerText = binary;*/

  //* Third Algorithm: Compact and Recursive, Call Stack Constraints
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  // animationData.forEach((obj) => {
  //   obj.inputVal;
  // });
};

// Function to check the user input when click the convert btn
const userCheckInput = () => {
  const inputInt = parseInt(numberInput.value);

  // Baris kode yang mengecek apakah inputan user itu kosong, angka atau bukan
  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", userCheckInput);

// users no longer need for click the convert btn, just pressed the Enter/Return kerword
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userCheckInput();
  }
});
