const arr = [8, 3, 5, 1, 7, 90, 2];


function InserTionSort(nums) {


  for (let i = 1; i < nums.length; i++) {

    let key=nums[i]

    let j=i-1

    while (j>=0&&nums[j]>key) {
      nums[j+1]=nums[j]
      j--
      console.log(j)
    }
    nums[j+1]=key
   

    
  }

  return nums
  
}


const result = InserTionSort(arr);

console.log("result", result);
