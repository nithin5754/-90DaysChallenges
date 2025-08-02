let nums = [3,2,4], target = 6

function TwoSum(arr, target) {
  let store = {};

  for (let i = 0; i < arr.length; i++) {
    const result = target - arr[i];

    if (!store.hasOwnProperty(result)) {
      store[arr[i]] = i;
    } else {
      return [store[result], i];
    }
  }

  return false;
}

let result = TwoSum(nums, target);

console.log("result  :--->", result);
