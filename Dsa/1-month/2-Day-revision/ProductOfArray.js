let nums = [1, 2, 3, 4];
function ProductOfArray(nums) {
  let prefix = [1];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(prefix[i - 1] * nums[i - 1]);
  }

  let suffix = [];

  suffix[nums.length - 1] = 1;

  for (let j = nums.length - 2; j >= 0; j--) {
    suffix[j] = suffix[j + 1] * nums[j + 1];
  }

  let prod = [];

  for (let k = 0; k < nums.length; k++) {
    prod.push(prefix[k] * suffix[k]);
  }

  return prod;
}

let result = ProductOfArray(nums);
console.log("result", result);
