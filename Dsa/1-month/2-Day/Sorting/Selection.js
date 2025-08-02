const arr = [8, 3, 5, 1, 7, 9, 2];

function SelectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [nums[i], nums[lowest]] = [nums[lowest], nums[i]];
    }
  }

  return nums;
}

const result = SelectionSort(arr);

console.log("result", result);
