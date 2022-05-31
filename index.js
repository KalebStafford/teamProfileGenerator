let composeHtml = require("./dist/profileTemplate");
let Engineer = require("./lib/Engineer");
let Manager = require("./lib/Manager");
let Intern = require("./lib/Intern");
let inquirer = require("inquirer");
let fs = require("fs");
let teamGroup = [];
let associates = "";

let addTeam = () => {
    inquirer
      .prompt([
        {
          name: "teamName",
          type: "input",
          message: "Please enter the team associate's full name:",
        },
        {
          name: "teamRole",
          type: "list",
          message: "Please pick the team associate's role:",
          choices: ["Manager", "Engineer", "Intern"],
        },
        {
          name: "teamID",
          message: "Please enter the team associate's id number:",
        },
        {
          name: "teamEmail",
          message: "Please enter the team associate's email address:",
        },
      ])
      .then(function ({ teamName, teamRole, teamID, teamEmail }) {
        let roleInfo = "";
        if (teamRole === "Engineer") {
          roleInfo = "GitHub username";
        } else if (teamRole === "Intern") {
          roleInfo = "school name";
        } else {
          roleInfo = "office phone number";
        }
        inquirer
          .prompt([
            {
              name: "roleInfo",
              message: `Please enter team associate's ${roleInfo}`,
            },
            {
              name: "moreTeam",
              type: "list",
              message: "Would you like to add more associates to your team?",
              choices: ["yes", "no"],
            },
          ])
          .then(function ({ roleInfo, moreTeam }) {
            let newTeam;
            if (teamRole === "Manager") {
              newTeam = new Manager(teamName, teamID, teamEmail, roleInfo);
            } else if (teamRole === "Engineer") {
              newTeam = new Engineer(teamName, teamID, teamEmail, roleInfo);
            } else {
              newTeam = new Intern(teamName, teamID, teamEmail, roleInfo);
            }
            teamGroup.push(newTeam);
            console.log(teamGroup);
            composeHtml(newTeam).then(function (data) {
              console.log(data);
              associates += data;
              if (moreTeam === "yes") {
                addTeam();
              } else {
                let html = startHtml(associates);
              }
            });
          });
      });
  };