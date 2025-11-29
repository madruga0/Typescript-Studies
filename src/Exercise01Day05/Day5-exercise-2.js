// como adicionar uma interface e fazerr a classe puxar atributos da interface?
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
        // this.age = age;
    }
    return Person;
}());
var pedro = new Person("Pedro", 27);
console.log("".concat(pedro.name, " is ").concat(pedro.age, " years old."));
