const converter = function (number) {
  let numberArray = [];
  // for (let i = number.length; i > 0; i--) {
  //   numberArray.push(number.slice(i-1));
  //   number = number.replace(number.slice(i-1), "0");
  //   // console.log(number.length);
  //   // console.log(number);
  //   // console.log(numberArray);
  // }
  // numberArray.reverse();
  // for (let i = number.length; i > 0; i--) {
  //   if (number.length[i] < 4) {
      
  //   }
  // }
  // console.log(numberArray);
  while (number > 0) {
    if (number > 3999) {
      return "Enter a number less than 4,000";
    } else if (number > 1000) {
      numberArray.push("M");
      number -= 1000;
    } else if (number > 900) {
      numberArray.push("CM");
      number -= 900;
    } else if (number > 500) {
      numberArray.push("D");
      number -= 500;
    } else if (number > 400) {
      numberArray.push("CD");
      number -= 400;
    } else if (number > 100) {
      numberArray.push("C");
      number -= 100;
    } else if (number > 90) {
      numberArray.push("XC");
      number -= 90;
    } else if (number > 50) {
      numberArray.push("L");
      number -= 50;
    } else if (number > 40) {
      numberArray.push("XL");
      number -= 40;
    } else if (number > 10) {
      numberArray.push("X");
      number -= 10;
    } else if (number > 9) {
      numberArray.push("IX");
      number -= 9;
    } else if (number > 5) {
      numberArray.push("V");
      number -= 5;
    } else if (number > 4) {
      numberArray.push("IV");
      number -= 4;
    } else {
      numberArray.push("I");
      number -= 1;
    }
  }
  numberArray = numberArray.join('');
  return numberArray;
}

$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());
    const romanNumeral = converter(number);
    $("#result").text(romanNumeral);
  });
});