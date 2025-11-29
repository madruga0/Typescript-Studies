// Day 5 - Exercise 5
var User = /** @class */ (function () {
    function User(name, id) {
        this.name = name;
        this.id = id;
    }
    return User;
}());
var user = new User('Dog', 1);
console.log(user.id);
// user.name = 'Harold' // pode mudar
// user.id = 5 // nao pode mudar
console.log("User:", user);
// previnir com que o numero possa ser alterado fora da classe
// readonly dentro da classe para impedir que uma property seja alterada depois
