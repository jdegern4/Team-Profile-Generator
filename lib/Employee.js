class Employee {
    constructor(name, employeeID, email, role) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmployeeID() {
        return this.employeeID;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;