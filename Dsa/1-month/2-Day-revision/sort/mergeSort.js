const arr = [8, 3, 5, 1, 7, 9, 2];

function mergeSort(arr) {
  if (arr.length <=1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return Sort(left, right);
}

function Sort(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

let result = mergeSort(arr);

console.log("result  :-->", result);
