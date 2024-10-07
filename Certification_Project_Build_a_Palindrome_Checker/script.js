const form = document.getElementById("form-palindrome");
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const textResult = document.getElementById("result");

function isAPalindrome(str){
  // let regex = /[^a-z0-9]/gi;
  // let lowRegStr = str.toLowerCase().replace(regex, "");

  // for (let i = 0; i < str.length/2; i++) {
  //   if (str[i] !== str[str.length - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;
  let regex = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(regex, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  return lowRegStr === reverseStr;
}

function showPalindromeResults(e){
  e.preventDefault();
  let userInput = textInput.value;

  if(userInput === ""){
    alert("Please input a value");
  } else if(isAPalindrome(userInput)) {
    textResult.innerText = `${userInput} is a palindrome`;
  } else {
    textResult.innerText = `${userInput} is not a palindrome`;
  }
}

checkButton.addEventListener("click", showPalindromeResults);