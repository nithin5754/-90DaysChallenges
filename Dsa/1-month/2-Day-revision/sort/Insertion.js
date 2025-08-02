const arr = [8, 3, 5, 1, 7, 9, 2];

function Insertion(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j>=0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }

  return array;
}


let result=Insertion(arr)

console.log("result : ",result);

