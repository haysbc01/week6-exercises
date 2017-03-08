console.log('JS: Problem Set #4');

var number = function (num){
  if (typeof (parseInt(num)) == 'number' && isNaN(parseInt(num)) == false && isFinite (parseInt(num)) == true){
    return num
  }
}

var addNumbers = function (string){

var numbers = [];

  for (var i = 0; i < string.length; i++){

    if(number(string[i]) == string[i]){
      numbers.push(string[i])

      var x = i+1;
      while(string[x] == number(string[x])){
        numbers[numbers.length - 1] += string[x];
        x++;
      }
      i = x;
    }

  } for (var a = 0 ; a < numbers.length ; a ++){
    var numbers = parseInt(numbers[a]) + parseInt(numbers[a+1])
    return numbers
  }
  }


console.log(addNumbers("88Hello 3World"));
