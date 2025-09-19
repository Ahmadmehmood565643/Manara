// const peopleData = [
//   {
//     Name: "Ahmad",
//     Age: 28,
//     Position: "Developer",
//   },
//   {
//     Name: "Noor",
//     Age: 27,
//     Position: "Designer",
//   },
//   {
//     Name: "Anfal",
//     Age: 18,
//     Position: "Manager",
//   },
//   {
//     Name: "Hamid",
//     Age: 24,
//     Position: "Manager",
//   },
// ];

// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match → undefined

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

// filter
const youngPeople = people.filter((person) => {
  return person.age < 30;
});

console.log(youngPeople);
// [ { name: 'bob', age: 20, position: 'developer' },
//   { name: 'peter', age: 25, position: 'designer' } ]

const developers = people.filter((person) => person.position === 'developer');
console.log(developers);
// [ { name: 'bob', age: 20, position: 'developer' } ]

// find
const peter = people.find((person) => person.name === 'peter');
console.log(peter);
// { name: 'peter', age: 25, position: 'designer' }

const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);
// undefined (because none older than 35)

const boss = people.find((person) => person.position === 'the boss');
console.log(boss);
// { name: 'susy', age: 30, position: 'the boss' }

