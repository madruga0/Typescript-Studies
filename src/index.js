var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// INHERITANCE -> classe padrao que contem todos os atributos, e a partir dela, eu crio as outras
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "greet", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
// Cliente do banco
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Client.prototype, "greet", {
        get: function () {
            return "Dear " + _super.prototype.greet;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}(Person));
// Funcionario do banco
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Staff.prototype, "greet", {
        get: function () {
            return "Hi, " + this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}(Person));
var client1 = new Client("Pedro", "Madruga", 23);
var staff1 = new Staff("Ana", "Maria", 50);
console.log(client1.greet);
console.log(staff1.greet);
