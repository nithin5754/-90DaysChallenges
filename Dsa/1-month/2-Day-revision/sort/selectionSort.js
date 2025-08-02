const arr = [8, 3, 5, 1, 7, 9, 2];

function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i != lowest) {
      [array[i], array[lowest]] = [array[lowest], array[i]];
    }
  }

  return arr;
}

let result = SelectionSort(arr);
console.log("result", result);
