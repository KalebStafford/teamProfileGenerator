let Intern = require('../lib/Intern');

test('gets school from results', () => {
    let testSchool = "Collin";
    let x = new Intern('Colton', 1, "cmanning@gmail.com", testSchool);
    expect(x.school).toBe(testSchool);
});
test('fetchRole returns "Intern"', () => {
    let testIntern = 'Intern';
    let x = new Intern("Jeffery", 1, 'jefflea@gmail.com', testIntern);
    expect(x.fetchRole()).toBe(testIntern);
});
test('gets school from fetchSchool()', () => {
    let testFetch = "Collin";
    let x = new Intern("Isabell", 1, "isachartier.gmail.com", testFetch);
    expect(x.fetchSchool()).toBe(testFetch);
});