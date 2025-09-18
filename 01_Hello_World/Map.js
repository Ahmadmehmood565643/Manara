const people = [
  {
    Name: "Ahmad",
    Age: 28,
    city: "Bahawalpur",
  },
  {
    Name: "Noor",
    Age: 27,
    city: "Bahawalpur",
  },
  {
    Name: "Anfal",
    Age: 18,
    city: "Bahawalpur",
  },
  {
    Name: "Hamid",
    Age: 24,
    city: "Bahawalpur",
  },
];
// const Age = people.map(person => person.Age)
// console.log(Age)

// const Name = people.map(person => person.Name);
// console.log(Name)

// const Naame=people.map(person=>person.Name.toLocaleLowerCase()); console.log(Name)
// const output = document.getElementById("output");

// Build HTML with map() + join()
output.innerHTML = `
  <ul>
    ${people
      .map(
        (person) => `
      <li>
        <strong>${person.Name}</strong>  
        (Age: ${person.Age}, City: ${person.city})
      </li>
    `
      )
      .join("")}
  </ul>
`;
