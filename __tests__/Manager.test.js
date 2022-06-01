let Manager = require('../lib/Manager');

test("Creates manager office phone number", () => {
    let testNumber = 500;
    let x = new Manager('Sammy', 1, "sampell@gmail.com", testNumber);
    expect(x.officeNumber).toBe(testNumber);
});

test('fetchRole() returns Manager ', () => {
    let testManager = "Manager";
    let x = new Manager('Cheng', 1, "cxiaoshi@gmail.com", 200);
    expect(x.fetchRole()).toBe(testManager);
});

test('grabs office phone number from getOffice()', () => {
    let testPhone = 100;
    let x = new Manager('Coconut', 1, "Coco@gmail.com", testPhone);
    expect(x.fetchOfficeNumber()).toBe(testPhone);
});