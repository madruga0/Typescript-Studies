// reduzir 5 linhas para 1 linha
var Employee = /** @class */ (function () {
    function Employee(title, salary) {
        this.title = title;
        this.salary = salary;
    }
    return Employee;
}());
var employee = new Employee("Engineer", 150000);
console.log("The new employee's title is ".concat(employee.title, " and receive ").concat(employee.salary, "."));
// 1. primeira abordagem: posso utilizar uma interface [ X ]
// teach approach
// posso inicializar os parametros apenas com o 'public'
var Employeee = /** @class */ (function () {
    function Employeee(title, salary) {
        this.title = title;
        this.salary = salary;
    }
    return Employeee;
}());
var employeee = new Employeee("Software Engineer", 130000);
console.log("The new employeee's title is ".concat(employeee.title, " and they gain $").concat(employeee.salary));
