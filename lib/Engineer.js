const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  fetchRole() {
    return "Engineer";
  }
  fetchGithub() {
    return this.github;
  }
}
module.exports = Engineer;