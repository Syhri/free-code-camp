const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const toRomanNumerals = (numberInput) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (numberInput >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      numberInput -= romanNumerals[i].value;
    }
  }
  return result;
};

const userCheckInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    output.textContent = "Please enter a valid number";
  } else if (inputInt <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputInt >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = toRomanNumerals(inputInt);
  }

  numberInput.value = "";
};

convertBtn.addEventListener("click", userCheckInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userCheckInput();
  }
});
