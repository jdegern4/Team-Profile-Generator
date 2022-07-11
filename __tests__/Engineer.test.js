const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer');

test('creates a new Engineer object', () => {
    const engineer = new Engineer('Armin');

    expect(engineer.name).toBe('Armin');
    expect(engineer.employeeID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})