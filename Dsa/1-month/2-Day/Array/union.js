


//Union of Two Sorted Arrays

const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr2 = [2,3,4,4,5,11,12]


function UnionOfTwoArrays(arr1,arr2) {

  const newArray=new Set([...arr1,...arr2])

 return [...newArray]
  
  
}

const result=UnionOfTwoArrays(arr1,arr2)

console.log("result",result);
