

//Binary Search 

let nums = [-1,0,3,5,9,12], target = 9

function BinarySearch(nums, target) {
 let left=0;
 let right=nums.length;    

 while(left<right){
    let mid=Math.floor((left+right)/2)

    if(nums[mid]===target)return mid

    if(nums[mid]>target){
        right=mid
    }else{
         left=mid+1
       
    }
 }

 return -1
};

const result=BinarySearch(nums,target)

console.log("result  :",result);
