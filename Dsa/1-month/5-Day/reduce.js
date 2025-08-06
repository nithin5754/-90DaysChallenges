const people = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 34 },
  { firstName: "Alice", lastName: "Johnson", age: 22 },
  { firstName: "Bob", lastName: "Williams", age: 40 },
  { firstName: "Charlie", lastName: "Brown", age: 30 },
];

const result = people.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log("result", result);
