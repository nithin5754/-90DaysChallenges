let arr = [8, 3, 5, 4, 7, 6, 1, 2];
function MergeSort(nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = MergeSort(nums.slice(0, mid));
  let right = MergeSort(nums.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
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

let result = MergeSort(arr);
console.log("result", result);
