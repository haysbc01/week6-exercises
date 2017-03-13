console.log('CHUNK');

function chunk(input, num){
  var numArr = Math.ceil(input.length/num);

  while (input.length > 0){
    newArrays = input.splice(0,numArr)
    console.log(newArrays);
  }
}

chunk([1,2,3,4,5,6,7,8,9,10], 2);
chunk([1,2,3,4,5,6,7,8,9,10], 3);
chunk([1,2,3,4,5,6,7,8,9,10], 7);
