/**
 * Move Zeroes
 */

const nums = [0, 1, 0, 3, 12];

function MoveZeroes(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      // [nums[i - count], nums[i]] = [nums[i], nums[i - count]];

      nums[i-count]^=nums[i]
      nums[i]^=nums[i-count]
      nums[i-count]^=nums[i]
    }
  }
  return nums
}

const result = MoveZeroes(nums);

console.log("result", result);
