function fizzBuzz (number) {
  for (var i = 0; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      $('#numberList').append('<li>'+"FizzBuzz"+'</li>');
    } 
    else if (i % 3 === 0) {
      console.log("Fizz");
      $('#numberList').append('<li>'+"Fizz"+'</li>');
    } 
    else if (i % 5 === 0) {
      console.log("Buzz");
      $('#numberList').append('<li>'+"Buzz"+'</li>');
    } 
    else {
      console.log(i);
      $('#numberList').append('<li>'+i+'</li>');
    }
  }
}

function getNumber() {
  var number = prompt("Enter a number.");
  
  number = parseInt(number);
  console.log(typeof(number));
  
  fizzBuzz(number);
}

