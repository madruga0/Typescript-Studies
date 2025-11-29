// reduzir 5 linhas para 1 linha

interface EmpAtt {
  title: string;
  salary: number;
}

class Employee implements EmpAtt {
  constructor(public title: string, public salary: number) {}
}

const employee = new Employee("Engineer", 150000);

console.log(
  `The new employee's title is ${employee.title} and receive ${employee.salary}.`
);

// 1. primeira abordagem: posso utilizar uma interface [ X ]

// teach approach

// posso inicializar os parametros apenas com o 'public'
// nao preciso da interface

class Employeee {
  constructor(public title: string, public salary: number) {}
}

const employeee = new Employeee("Software Engineer", 130000);
console.log(
  `The new employeee's title is ${employeee.title} and they gain $${employeee.salary}`
);
