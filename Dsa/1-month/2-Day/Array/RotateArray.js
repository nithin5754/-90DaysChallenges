//Rotate Array

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

function RotateArray(nums,k) {
  k=k%nums.length

  for (let i = 0; i < k; i++) {
    
     let firstElem=nums.pop()
     nums.unshift(firstElem)
    
  }

  return nums
}



const result=RotateArray(nums,k)

console.log("result",result);

