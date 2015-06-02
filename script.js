function fizzBuzz (number) {
  for (var i = 0; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function getNumber() {
  var number = prompt("Enter a number.");
  
  number = parseInt(number);
  /*console.log(typeof(number));*/
  
  fizzBuzz(number);
}