console.log('CHUNK');

function chunk(input, num){
console.log("num = "+num+" rem = "+rem)

  while (input.length > 0){
    var numArr = Math.ceil(input.length/num);
    var rem = Math.ceil(input.length%num);

    newArrays = input.splice(0,numArr)

    num = num - 1
    // console.log(newArrays);
    // console.log(numArr);
    // console.log(num);
    console.log(newArrays);
  }
}

chunk([1,2,3,4,5,6,7,8,9,10], 2);
chunk([1,2,3,4,5,6,7,8,9,10], 3);
// chunk([5,6,7,8,9,10], 2);
// chunk([8,9,10], 1);
// chunk([1,2,3,4,5,6,7,8,9,10], 4);
// chunk([1,2,3,4,5,6,7,8,9,10], 5);
// chunk([1,2,3,4,5,6,7,8,9,10], 6);
chunk([1,2,3,4,5,6,7,8,9,10], 7);
// chunk([3,4,5,6,7,8,9,10], 6);
// chunk([5,6,7,8,9,10], 5);
// chunk([7,8,9,10], 4);
// chunk([8,9,10], 3);
// chunk([9,10], 2);
// chunk([10], 1);
// chunk([1,2,3,4,5,6,7,8,9,10], 8);
chunk([1,2,3,4,5,6,7,8,9,10], 9);
