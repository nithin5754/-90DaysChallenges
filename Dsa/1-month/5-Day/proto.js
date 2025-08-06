const arr = [1, 2, 3, 4, 5, 6];

const area = function (radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (logic) {
  let result = [];


  

  for (let i = 0; i < this.length; i++) {
    result.push(logic(this[i]));
  }
  return result;
};

const res = arr.calculate(area);
console.log("result  : ", res);
