function SpiralMatrix(nums) {
  if (!nums || nums.length === 0 || nums[0].length === 0) return [];
  let left = 0;
  let right = nums[0].length - 1;
  let top = 0;
  let bottom = nums.length - 1;
  let res = [];

  while (top <= bottom && left <= right) {
    //right
    for (let i = left; i <= right; i++) {
      res.push(nums[top][i]);
    }
    top++;

    //bottom

    for (let i = top; i <= bottom; i++) {
      res.push(nums[i][right]);
    }
    right--;

    //LEFT

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(nums[bottom][i]);
      }
      bottom--;
    }

    //TOP

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(nums[i][left]);
      }
      left++;
    }
  }

  return res;
}
let nums = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let result = SpiralMatrix(nums);
console.log("result", result);
