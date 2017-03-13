function chunk(input, num){
  while (input.length > 0){
    var newArrays = input.splice(0, Math.ceil(input.length/num));
    num = num - 1
    console.log(newArrays);}}

chunk([1,2,3,4,5,6,7,8,9,10], 2);
chunk([1,2,3,4,5,6,7,8,9,10], 3);
chunk([1,2,3,4,5,6,7,8,9,10], 7);
