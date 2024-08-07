// Given array of employees
let employees = [
    {id: 1, name: "john", age: "18", profession: "developer"},
    {id: 2, name: "jack", age: "20", profession: "developer"},
    {id: 3, name: "karen", age: "19", profession: "admin"}
];

// Print Developers by Map
function printDevelopersByMap() {
    employees.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// Print Developers by ForEach
function printDevelopersByForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// Add Data
function addData() {
    const newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
    employees.push(newEmployee);
    console.log(employees);
}

// Remove Admin
function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}

// Concatenate Array
function concatenateArray() {
    const newEmployees = [
        {id: 5, name: "mike", age: "22", profession: "developer"},
        {id: 6, name: "emma", age: "21", profession: "designer"},
        {id: 7, name: "sam", age: "23", profession: "manager"}
    ];
    const combinedArray = employees.concat(newEmployees);
    console.log(combinedArray);
}

// Calling functions for demonstration
printDevelopersByMap();
printDevelopersByForEach();
addData();
removeAdmin();
concatenateArray();
