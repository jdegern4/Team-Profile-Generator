const Manager = require('../lib/Manager');
jest.mock('../lib/Manager');

test('creates a new manager object', () => {
    const manager = new Manager('Levi');

    expect(manager.name).toBe('Levi');
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});