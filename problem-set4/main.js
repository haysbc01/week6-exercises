console.log('JS: Problem Set #4');

var addNumbers = function (string){
  var arrays = string.split('');
  console.log(arrays)
  var numbers = []
  for (var i = 0; i < arrays.length; i++){
    //console.log(isNaN(arrays[i]))
    if(isNaN(arrays[i]) == false){
      //console.log(arrays[i])
      if(isNaN(arrays[i] + arrays[i+1])){
        var joined = arrays[i];
        //console.log (joined);
      }else{
        console.log(arrays[i]+arrays[i+1])
      }

    }
    // console.log(parseFloat(arrays[i]))
    // var parsed = parseFloat(arrays[i])
    // console.log(parsed);

      // if(arrays[i] == 1 ||
      //   arrays[i] == 2 ||
      //   arrays[i] == 3 ||
      //   arrays[i] == 4 ||
      //   arrays[i] == 5 ||
      //   arrays[i] == 6 ||
      //   arrays[i] == 7 ||
      //   arrays[i] == 8 ||
      //   arrays[i] == 9){
      //     if()
      //   //numbers.push(arrays[i]);
      //   console.log(arrays[i]);
      // }
    }
  }



console.log(addNumbers("88Hello 3World"));
