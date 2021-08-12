const employee = {
    name: 'Ryan',
    address: 'North Lodge Cottage'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updateEmployee = { ...employee };
    updateEmployee.name = 'Sam';
    updateEmployee.streetAddress = '11 Broadway';
    return updateEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    delete employee.address
    return employee
}