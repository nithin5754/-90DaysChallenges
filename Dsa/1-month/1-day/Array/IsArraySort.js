/**
 * Check if the array is sorted
 */

const array = [4,5,1,2,3];

function IsArraySort(data) {

   let count=0

   for(let i=0;i<data.length;i++){
    if(data[i]>data[(i+1 ) % data.length]){
        count++
    }
   }

   return count<=1
  }


const result = IsArraySort(array);

console.log("result", result);
