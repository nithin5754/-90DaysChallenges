let arr = [8, 3, 5, 4, 7, 6, 1, 2];

function Sorting(nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = Sorting(nums.slice(0, mid));
  let right = Sorting(nums.slice(mid));
  return MergeSort(left, right);
}

function MergeSort(left, right) {
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

let result = Sorting(arr);

console.log("result", result);
