let composeHtml = require("./dist/profileTemplate");
let Engineer = require("./lib/Engineer");
let Manager = require("./lib/Manager");
let Intern = require("./lib/Intern");
let inquirer = require("inquirer");
let fs = require("fs");
let teamGroup = [];
let associates = "";