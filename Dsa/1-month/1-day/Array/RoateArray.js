// Rotate Array

let array = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

function RotateArray(data, k) {
 
  k=k%data.length
   const kElem=data.splice(data.length-k,k)
 data.unshift(...kElem);

  return data
}

const result = RotateArray(array, k);

console.log("result is", result);
