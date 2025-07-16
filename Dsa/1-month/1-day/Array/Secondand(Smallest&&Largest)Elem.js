//Second Largest and Smallest Element in an Array without sorting

const array = [1, 2, 4, 7, 7, 5];

function FindSecondSmallAndLargestElem(data) {
  let firstMin = Infinity;
  let secondMin = Infinity;

  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < data.length; i++) {
    if (data[i] < firstMin) {
      secondMin = firstMin;
      firstMin = data[i];
    } else if (data[i] > firstMin && data[i] < secondMin) {
      secondMin = data[i];
    }

    if (data[i] > firstMax) {
      secondMax = firstMax;
      firstMax = data[i];
    } else if (data[i] < firstMax && data[i] > secondMax) {
      secondMax = data[i];
    }
  }

  return {
    secondMax,
    secondMin,
  };
}

let result = FindSecondSmallAndLargestElem(array);

console.log("result", result);
