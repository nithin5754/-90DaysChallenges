let arr = [8, 3, 5, 4, 7, 6, 1, 2];

// function quickSort(array) {
//   if (array.length < 2) return array;
//   let pivot = array[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let partition = Quick(arr, left, right);

    QuickSort(arr, left, partition - 1);
    QuickSort(arr, partition + 1, right);
  }

  return arr;
}

function Quick(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i <= j) {
    while (arr[i] <= pivot && i <= j) {
      i++;
    }
    while (arr[j] > pivot && i <= j) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

let result = QuickSort(arr);

console.log("number  : ", result);
