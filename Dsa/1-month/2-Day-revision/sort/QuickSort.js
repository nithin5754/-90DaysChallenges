const arr = [8, 3, 5, 1, 7, 9, 2];

function QuickSort(nums, left = 0, right = nums.length - 1) {
  if (left < right) {
    let partitionIndex = Quick(nums, left, right);

    QuickSort(nums, left, partitionIndex - 1);
    QuickSort(nums, partitionIndex + 1, right);
  }

  return nums;
}

function Quick(arr, left, right) {
  let i = left;
  let j = right;
  let key = arr[i];

  while (i < j) {
    while (i < j && arr[i] < key) {
      i++;
    }

    while (i < j && arr[j] > key) {
      j--;
    }
    [key, arr[j]] = [arr[j], key];
  }
  [arr[i], arr[j]] = [arr[j], arr[j]];

  return j;
}

let result = QuickSort(arr);

console.log("result", result);
