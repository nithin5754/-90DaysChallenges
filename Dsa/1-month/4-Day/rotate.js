let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
var rotate = function (nums) {
  let arr = Array.from({ length: nums.length }, () =>
    Array(nums.length).fill(0)
  );
  for (let i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      arr[j][nums.length - 1 - i] = nums[i][j];
    }
  }    
  return arr;
};

let result = rotate(matrix);
console.log("result", result);
