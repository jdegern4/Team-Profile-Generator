const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Floch');

    expect(intern.name).toBe('Floch');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})