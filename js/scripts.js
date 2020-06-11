const converter = function (number) {
  const numberArray = [];
  // while (number > 0) {
  //   let count = 0;
  //   numberArray.push(number % 10);
  //   number = number / 10;
  //   count++;
  //   console.log(numberArray);
  // }

  if (number > 3999) {
    return "Enter a number less than 4,000";
  }
}

$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());
    const romanNumeral = converter(number);
    $("#result").text(romanNumeral);
  });
});