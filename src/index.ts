// INHERITANCE -> classe padrao que contem todos os atributos, e a partir dela, eu crio as outras
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  get greet() {
    return this.firstName + " " + this.lastName;
  }
}

// Cliente do banco
class Client extends Person {
  override get greet() {
    return "Dear " + super.greet;
  }
}

// Funcionario do banco
class Staff extends Person {
  override get greet() {
    return "Hi, " + this.firstName + " " + this.lastName;
  }
}

let client1 = new Client("Pedro", "Madruga", 23);
let staff1 = new Staff("Ana", "Maria", 50);

console.log(client1.greet);
console.log(staff1.greet);