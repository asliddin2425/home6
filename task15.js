let a=prompt("a sonni kiriting");

function checkDigitSum(num) {
  let sum = 0;
  let str = num.toString();

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  if (sum < 10) {
    return "kichik";
  } else if (sum >= 10 && sum <= 20) {
    return "o‘rtacha";
  } else {
    return "katta";
  }
}

console.log(checkDigitSum(a));