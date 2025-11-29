// Day 7 - Exercise 1

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string; // funcao dentro de uma empresa
}

type Person = User | Admin;

let persons: Person[] = [
  {
    name: "Pedro Madruga",
    age: 23,
    occupation: "Software Enginner",
    // role: "Frontend deparment",
  },
  {
    name: "Brenda Fortes",
    age: 30,
    occupation: "Doctor",
    role: "Dermathologist",
  },
];

const logPerson = (person: Person) => {
  let additionalInfo: string;
  if ("role" in person) {
    additionalInfo = person.role;
  } else {
    additionalInfo = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInfo} `);
};

persons.forEach(logPerson);
