
 //TWO SUM
 
 function TwoSum(nums, target) {

let store={};

for(let i=0;i<nums.length;i++){

    let result=target-nums[i]

      if(!store.hasOwnProperty(nums[i])){
         store[result]=i
      }else{
        return [store[nums[i]],i]
      }
}
    
};

let nums = [2,7,11,15], target = 9;

const result=TwoSum(nums,target)

console.log("result",result);
