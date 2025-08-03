let nums = [1, 1, 0, 1, 1, 1];

function MaxConsecutive(nums) {
  let count = 0;
  let left = 0;
  let max = 0;

  while (left < nums.length) {
    if (nums[left] === 1) {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
    left++
  }

  return max;
}

let result = MaxConsecutive(nums);
console.log("result  :", result);
