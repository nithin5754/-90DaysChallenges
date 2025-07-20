const arr = [2, 5, 8, 11, 13, 15, 17, 19, 21, 24];

function BinarySearch(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    
    if (nums[mid] < target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const target = BinarySearch(arr, 15);

console.log("target", target);