let Engineer = require("../lib/Engineer");

test("sets GitHub account from constructor", () => {
  let testUser = "User";
  let x = new Engineer("Josue", 1, "jpaniagua@gmail.com", testUser);
  expect(x.github).toBe(testUser);
});
test("fetchRole() returns the Engineer", () => {
  let testEngineer = "Engineer";
  let x = new Engineer("Hailee", 1, "hhiller@gmail.com", "User");
  expect(x.fetchRole()).toBe(testEngineer);
});
test("Gets GitHub username from fetchGithub()", () => {
  let testGithub = "GitHub";
  let x = new Engineer("Adiran", 1, "acastillo@gmail.com", testGithub);
  expect(x.fetchGithub()).toBe(testGithub);
});