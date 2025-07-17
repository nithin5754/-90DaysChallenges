//485. Max Consecutive Ones

const nums = [1, 1, 0, 1, 1, 1];

function FindConsecutiveOnes(nums) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }

  return max;
}

const result = FindConsecutiveOnes(nums);

console.log("result  :", result);
