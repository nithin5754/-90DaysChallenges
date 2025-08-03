let nums = [0, 1,0,5, 0, 3, 12];

// function MoveZeros(nums) {
//   let count = 0;
//   let left = 0;

//   while (left < nums.length) {
//     if (nums[left] !== 0) {
//       [nums[count], nums[left]] = [nums[left], nums[count]];
//       count++;
//     }
//     left++
//   }

//   return nums;
// }



function MoveZeros(nums) {


  let count=0

  let left=0


  while (left<nums.length) {

    if(nums[left]==0){
      count++
    }else if(nums[left]!==0){
      [nums[left-count],nums[left]]=[nums[left],nums[left-count]]
    }
    left++
  }

  return nums;
}

let result = MoveZeros(nums);

console.log("result", result);



