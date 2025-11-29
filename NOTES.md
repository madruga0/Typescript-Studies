## js

     - sem anabolizante
     - dynamic
     - let a = 2

## ts

     - js com anabolizante
     - js com type check
     - static
     - let a: String = 2
     - ajuda a nao errar nao hora do type
     - ts eh uma linguagem nao-interpretada pelos browsers

## other notes

    - npm != npx
        * what is npm?
            -> instala pacotes
            -> gerenciador de pacotes do Node.js
            ->  serve para instalar, atualizar e gerenciar dependencias de um projeto
        * what is npx?
            -> executa pacotes (mesmo que nao instalados globalmente)
            -> executor de pacotes que vem junto com o npm (5.2 +)
            -> serve para executar pacotes sem precisar instala-los globalmente
    - tsc -> typescript compiler
    - index.ts gera index.js
    - compilar o index.ts e criar o index.js -> tsc file.ts
    - mapear .js dentro do .html
    - ts faz sentido em aplicacoes de grande porte (seu contexto atual: Liferay [X])
    -* manter apenas .ts aberto para nao ter conflito com o .js (se necessario, confere)
    - type assignment -> colocando tipo a uma variavel

## aula02 -> criando um arquivo de compile no ts

    - tsc --init
        -> criar um arquivo de config para o processo de compile
    - tsconfig do compiler eh que mostra a voce o que deve compilar e o que nao
        - tsc apos todas as configuracoes

## tipos do ts

    - + os do js
    - any
    - unknown
    - tuple
        - ordem importa
        - aceita varios tipos
    - never
    - enum
        - enum -> mapear informacoes / associacao de dois itens
        - ao inves de criar 3 variaveis

    * boa pratica do ts -> nao deixar uma variavel any, sem tipo ou valor
    * declarou um array, se for um tipo especifico, deixa declarado

## any VS unknown

    - unknown: como que caberia num caso real?
    - o unknown pode s er alguma coisa mas de forma temporaria
    - recebe de forma temporaria e associa a um formato fixo
    -* nesse caso, eh o melhor nesse caso de: receber um input, nao saber o que eh, fazer a verificacao e depois associar o tipo do conteudo/value a aquela variavel

## alias

    - ajuda a definir em um local so, meio que de forma global, as propriedades de um objeto ou de uma constante
    - eh como se fosse um apelido

## union type

    - habilitamos que um parametro pode habilitar dois tipos
    - podemos adicionar mais, quantos quisermos

## intersection -> IPC

    - consigo pegar dois ou mais alias e criar um unico fazendo a intersection deles

## compiler

    - tsconfig.json >> todas as configs do projeto
    - index.ts <<-- compiler / tsconfig.json --->> index.js
    - * tsc --watch <fileName> faz a compilacao automatica do meu projeto

## include AND exclude

    - tenho 5 ts scripts,
    - pura logica
    - utilizar da forma que for mais logica na hora de incluir ou excluir

## target

    - nada mais do que as **versoes do javascript**
    - entendendo que alguns browsers suportam determinada versao,
    - algumas versoes terao suas particularidades

## habilitando o source map

    - cria um arquivo de mapemento que o browser vai conseguir ler
    - vai ajudar no debug la na frente na execucao do nosso codigo

## OOP & interfaces

    - os objetos se comunicam um com os outros
    - um objeto eh composto de PROPERTIES and METHODS

## classes

    - eh a fabrica de carro

## Public && Private

    - nao devem ser alterados fora da classe.

## Interface

    - qualquer momento que alguem crie um objeto, e esse objeto vai ser associado a alguma interface, esse objeto, obrigatoriamente, precisa ter a mesma quantidade de informacao que
    essa interface possui

# readOnly X private

    - temos uma diferenca entre ser ACESSADA fora da classe e ser MODIFICADA fora da classe
    - readOnly -> posso acessar, mas nao posso alterar
    - private -> nao posso acessar, logo, nao altero

## Parametro do construtor

    - public nos parametros para iniciar com a instanciacao do construtor
    - quando for 'private', coloca _letName
    - interessante porque as variaveis ja serao iniciadas na declaracao da classe

# Index Signatures

    - quando precisamos criar uma classe, mas a property nao eh fixa.
    - queremos criar a property depois, na criacao do objeto
    - deixamos a property em branco, mas definimos o seu type
    - [roomNumber: string]: string; // property que sera definida quando eu criar o objeto

# Inheritance

    - defino uma classe padrao
    - a partir dessa classe, classes menores serao criadas (childs)

# Overriding

    - pegar um metodo que ta no padrao, e nos childs, voce sobrescreve partes ou o metodo todo
    - override get method()

# Code and explications

```js
let price = 40;

let value; // nao especifiquei essa variavel
value = 10;
value = "Madruga";

let values: number[] = [10, 20, 30, 40, 60];
// se for um array especifico, tenha certeza de que o tipo foi declarado

// tuple -> armazenar varios tipos diferentes
let item: [string, number, boolean] = ["apple", 3, true];

// enum -> mapear informacoes / associacao de dois itens

// ao inves de criar 3 variaveis
enum Role {
  admin = 1,
  read = 2,
  backup = 3,
}

const user = {
  firsName: "Pedro",
  role: Role.backup,
  lastName: "Madruga",
};

console.log("Role: " + user.role);

// function return
// -> preciso definir o tipo dos parametros, senao o retorno vai ser any

// -> hard code, declarando no retorno o tipo que os parametros ja estao declarando
const add = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(add(3, 2));

// function void
function result(result: number) {
  console.log("The result is " + price);
}
console.log(result(add(3, 5)));
// porque eh void? porque essa funcao nao tem um retorno
// teve void, nao existe 'return' na funcao

// Objetos
const person = {
  firstName: "Pedro",
  age: 23,
  lastName: "Madruga",
};

// Unknown
let itemInput: unknown;
let itemName: string;

itemInput = 10;
itemInput = 'Apple'

if ( itemInput === 'string' ) {
  itemName = itemInput;
}

// Never -> nunca retornar um valor para o console
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Error unexpected", 404);
console.log(generateError("Error unexpected", 404));


// ALIAS
// alias
type Users = {
  firstName: string;
  age: number;
  lastName: string;
};

const user: Users = {
  firstName: "Pedro",
  age: 23,
  lastName: "Madruga",
};

console.log(user);


// Union type -> IMPORTANTISSIMO PARA CARAMBA

function userInput(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

const combinePrices = userInput(10, 20);
console.log(combinePrices);

const combineName = userInput("Banana", "sem casca");
console.log(combineName);


// Literal type com Union
let productPrice: 10 | 20 | 30;
let productSize: "S" | "M" | "L";

productPrice = 30;
productSize = "S";



// Intersection -> combinar dois objetos ou duas aliases
type User = {
  firstName: string;
  age: number;
};

type JobRole = {
  id: number;
  role: string;
};

// criar um objeto onde vou passar primeiro nome, age, id e role, mas estao separadas em duas aliases

type Employee = User & JobRole;

const emp1: Employee = {
  firstName: "Pedro",
  age: 23,
  id: 122,
  role: "Software Engineer",
};

console.log(emp1);

// associou dois types dentro de um so




// OOP
class Users {
  // properties
  name: string; // property
  balance: number; // property

  constructor(n: string, b: number) {
    this.name = n;
    this.balance = b;
  }

  // methods
  addMoney(amount: number) {
    this.balance += amount;
  }
}

const user1 = new Users("Pedro", 514);

user1.addMoney(100);

const user2 = new Users("Brenda", 478);

console.log(user1);
console.log(user2);


// Interface
interface Item {
  name: string;
  value: number;
  itemPurchased(msg: string): void;
}

let product1: Item;

product1 = {
  name: "Apple",
  value: 2,
  itemPurchased(msg) {
    console.log(msg + ' ' + this.name);
  },
};


product1.itemPurchased('You just bought an')

// READONLY VS PRIVATE

class Movies {

  readonly id: number;
  readonly name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let movie1 = new Movies(1, "Rambo");
// movie1.id = 3
console.log(movie1)



// Parametro do construtor
class Movies {
  // readonly id: number;
  // readonly name: string;

  constructor(
    public readonly id: number,
    public name: string,
    private _price: number
  ) {
    // this.id = id;
    // this.name = name;
  }
}

let movie1 = new Movies(1, "Rambo", 25);
console.log(movie1);

// public nos parametros do construtor -> inicia na instanciacao do construtor


// INDEX SIGNATURES
class HotelRooms {
  [roomNumber: string]: string; // property que sera definida quando eu criar o objeto
}

let room = new HotelRooms();

room.A201 = "Pedro"; // vamos criar a property
room.A202 = "Brenda";
room.A203 = "Familia";

console.log(room);
// AMAZING -> armazenar dinamicamente properties dentro da minha classe;



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
```
