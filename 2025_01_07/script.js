function armstrong(number) {
  let end = 0;
  let stringnumber = number.toString();
  let digits = stringnumber.split("");
  for (let i = 0; i < stringnumber.length; i++) {
    end += Number(digits[i]) ** stringnumber.length;
  }
  if (end == number) {
    console.log(true);
  } else {
    console.log(false);
  }
}
