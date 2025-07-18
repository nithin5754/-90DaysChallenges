//Find the number that appears once, and the other numbers twice

const nums = [3, 5, 3, 4, 4, 8, 5, 6, 6];

// function FindOnes(nums) {
//   let store = {};

//   for (const element of nums) {
//     if (store.hasOwnProperty(element)) {
//       store[element]++;
//     } else {
//       store[element] = 1;
//     }
//   }

//   console.log("store", store);

//   for (const key in store) {
//     if (store[key] === 1) {
//       return key;
//     }
//   }
// }

//using xor

function FindOnes(nums) {
  let unique = 0;

  for (const element of nums) {
    unique ^= element;
  }

  return unique;
}

const result = FindOnes(nums);

console.log("result", result);
