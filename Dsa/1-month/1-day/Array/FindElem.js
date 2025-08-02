//Given an array, and an element
// num the task is to find if
// num is present in the given array or not.
// If present print the index of
// the element or print -1.

let array = [1, 2, 3, 4, 5];
let num = 3;
function FindElem(data, k) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === k) {
      return i;
    }
  }
  return -1;
}

const result = FindElem(array, num);

console.log("result", result);
