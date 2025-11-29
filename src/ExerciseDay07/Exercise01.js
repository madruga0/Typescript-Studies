// Day 7 - Exercise 1
var persons = [
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
var logPerson = function (person) {
    var additionalInfo;
    if ("role" in person) {
        additionalInfo = person.role;
    }
    else {
        additionalInfo = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInfo, " "));
};
persons.forEach(logPerson);
