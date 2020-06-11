const converter = function (number) {
  const numberArray = [];
  for (let i = number.length; i > 0; i--) {
    numberArray.push(number.slice(i-1));
    number = number.replace(number.slice(i-1), "0");
    // console.log(number.length);
    // console.log(number);
    // console.log(numberArray);
  }
  numberArray.reverse();
  for (let i = number.length; i > 0; i--) {
    if (number.length[i] < 4) {
      
    }
  }
  // console.log(numberArray);
  if (number > "3999") {
    return "Enter a number less than 4,000";
  } else if (number === "1000") {
    return "M";
  } else if (number === "500") {
    return "D";
  } else if (number === "100") {
    return "C";
  } else if (number === "50") {
    return "L";
  } else if (number === "10") {
    return "X";
  } else if (number === "5") {
    return "V";
  } else if (number === "1") {
    return "I";
  }
}

$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    const romanNumeral = converter(number);
    $("#result").text(romanNumeral);
  });
});