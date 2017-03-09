console.log('JS: Problem Set #4');

function number(num){
  // return !isNaN(parseFloat(num)) && isFinite(num);

  if (typeof (parseInt(num)) == 'number' && isNaN(parseInt(num)) == false && isFinite(parseInt(num)) == true){
    return num
  }
}

function addNumbers(string){

var numbers = []

  for (var i = 0; i < string.length; i++){

    if(number(string[i]) == string[i]){
      numbers.push(string[i])

      var x = i+1;

      while(string[x] == number(string[x])&& x <= string.length){
        numbers[numbers.length-1] += string[x];
        // console.log(numbers)
        x++;
      }
      i = x;
    }

  }for (var a = 0 ; a < numbers.length ; a ++){
    return numbers
          .map(function(str) { return parseInt(str); })
          .reduce(function(x,y) {return x+y});

    }
}

console.log(addNumbers("88Hello 3World"));
console.log(addNumbers("55He55l8l5o"));
console.log(addNumbers("5Hello 5"));


console.log('longest word')

function longestWord(string) {
  var split = string.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i < split.length; i++) {
      if (longest < split[i].length) {
          longest = split[i].length;
          word = split[i];
      }
  }
  return word;
}

console.log(longestWord('I am trying to find the longest word in this sentence, it should return Mississippi.'));
console.log(longestWord('Hello there what is your name?'));



console.log('averageStringNumbers')

function averageStringNumbers(string){

  var numbers = [];
  var numLetters = string.match(/[a-zA-Z]/g).length;

  for (var i = 0; i < string.length; i++){

    if(number(string[i]) == string[i]){
      numbers.push(string[i])
    }
    }var total = numbers
                .map(function(str) { return parseInt(str); })
                .reduce(function(x,y) {return x+y});

  var average = Math.round(total/numLetters);
  // console.log(numLetters);

  return average;
}

console.log(averageStringNumbers("Hello6 9World 2, Nic8e D7ay!"));
