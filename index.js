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

  function startHtml(associates) {
    let html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="../dist/style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
      <title>Team Profile</title>
    </head>
    <body>
      <nav class="navbar">
        <div class="h1">My Team</div>
      </nav>
    <div class="container">
      <div class="row">
        ${associates}
      </div>
    </body>
  </html>
  `;
  
  fs.writeFile("./src/profile.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  return html;
}

function initApp() {
  startHtml();
  addTeam();
}

initApp();