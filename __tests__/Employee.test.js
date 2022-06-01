let Employee = require("../lib/Employee");

describe("Employee", () => {
  test("Creates employee roster", () => {
    let x = new Employee();
    expect(typeof x).toBe("object");
  });
  test("finds name", () => {
    let nameExample = "Yui";
    let x = new Employee(nameExample);
    expect(x.nameExample).toBe(nameExample);
  });
  test("finds id", () => {
    let Identification = 500;
    let x = new Employee("Scott", Identification);
    expect(x.Identification).toBe(Identification);
  });
  it("finds email address", () => {
    let testEmail = "tobuscus@gmail.com";
    let x = new Employee("Tobi", 1, testEmail);
    expect(x.email).toBe(testEmail);
  });
  describe("fetchName", () => {
    it("grabs name from fetchName()", () => {
      let nameFetched = "Austin";
      let x = new Employee(nameFetched);
      expect(x.fetchName()).toBe(nameFetched);
    });
  });
  describe("fetchId", () => {
    it("grabs id from fetchId()", () => {
      let testID = 200;
      let x = new Employee("Connor", testID);
      expect(x.fetchId()).toBe(testId);
    });
  });
  describe("fetchEmail", () => {
    it("grabs email from fetchEmail", () => {
      let testMail = "saytaiwan@gmail.com";
      let x = new Employee("Sayaka", 2, testMail);
      expect(x.fetchEmail()).toBe(testMail);
    });
  });
  describe("fetchRole", () => {
    it(' returns "Employee"', () => {
      let testEmployee = "Employee";
      let x = new Employee("Lilith", 3, "lscarlet@gmail.com");
      expect(x.fetchRole()).toBe(testEmployee);
    });
  });
});