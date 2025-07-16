/**
 *
 * Largest Element in an Array
 */

const arr = [30, 20, 6, 8, 31, 4, 2];

function LargestElement(data) {
  if (data.length <= 0) {
    return "should contain atleast one element";
  }
  let max = data[0];

  for (let i = 1; i < data.length; i++) {
    if (data[i] > max) {
      max = data[i];
    }
  }

  return max;
}

const result = LargestElement(arr);

console.log("result", result);
