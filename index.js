const employee = {
    name:'Ryan',
    streetAddress: '2020 Kimbrook'
};

function updateEmployeeWithKeyAndValue() {
    const updateEmployee = { ...employee };

updateEmployee.name = 'Sam';
updateEmployee.streetAddress = '11 Broadway';
return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey() {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey() {
    const newEmployee = employee;
    delete newEmployee.name;
    return newEmployee;
}