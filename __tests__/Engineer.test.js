const Engineer = require('../lib/Engineer');

test('creates a new Engineer object', () => {
    const engineer = new Engineer('Armin');

    expect(engineer.name).toBe('Armin');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe(expect.any(String));
    expect(engineer.github).toBe(expect.any(String));
})