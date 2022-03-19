// Write your solution in this file!

const employee = {
    name:"Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value ){
    const employees = {...employee}
    employees[key] = value;
    return employees;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key){
    return {...employee.key, delete: key}
}

function destructivelyDeleteFromEmployeeByKey( obj, key){
    delete obj[key]
    return obj
}
