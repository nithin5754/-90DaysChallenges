const arr = [8, 3, 5, 1, 7, 9, 2];

// function BubbleSort(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//       }
//     }
//   }

//   return nums;
// }




// function BubbleSort(nums) {

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length-i-1; j++) {

//       if(nums[j]>nums[j+1]){
//         [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
//       }


          

//     }
    
//   }

//   return nums
  
// }



const result = BubbleSort(arr);

console.log("result", result);
