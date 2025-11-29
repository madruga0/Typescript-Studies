// como adicionar uma interface e fazerr a classe puxar atributos da interface?

interface PersonAttributes {
  name: string;
  age: number;
}

class Person implements PersonAttributes {
  constructor(public name: string, public age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const pedro = new Person("Pedro", 27);

console.log(`${pedro.name} is ${pedro.age} years old.`);
