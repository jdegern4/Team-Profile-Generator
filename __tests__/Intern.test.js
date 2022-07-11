const Intern = require('../lib/Intern');
jest.mock('../lib/Intern');

test('creates a new intern object', () => {
    const intern = new Intern('Floch');

    expect(intern.name).toBe('Floch');
    expect(intern.employeeID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})