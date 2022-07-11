const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Eren');

    expect(employee.name).toBe('Eren');
    expect(employee.employeeID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});