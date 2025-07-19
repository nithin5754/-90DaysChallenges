const arr = [8, 3, 5, 1, 7, 9, 2];

function Sorting(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  return nums;
}

const result = Sorting(arr);

console.log("result", result);
