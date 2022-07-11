const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Levi');

    expect(manager.name).toBe('Levi');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});