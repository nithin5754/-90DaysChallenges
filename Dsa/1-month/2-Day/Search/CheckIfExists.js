//1346. Check If N and Its Double Exist

let arr = [10, 2, 5, 3];


function CheckIfExist(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == 2 * arr[j] && i != j) {
        return true;
      }
    }
  }
  return false;
}

const result = CheckIfExist(arr);

console.log("result", result);
