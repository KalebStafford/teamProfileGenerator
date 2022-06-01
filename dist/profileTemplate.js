function composeHtml(associate) {
  return new Promise(function (resolve, reject) {
    let Name = associate.fetchName();
    let Role = associate.fetchRole();
    let ID = associate.fetchId();
    let emailAddress = associate.fetchEmail();
    let data = "";
    if (Role === "Manager") {
        let officeNumber = associate.fetchOfficeNumber();
        data = `
      <div class="col-sm-4">
        <div class="card" style="width: 300px;">
            <div class="card-body">
              <h1 class="card-title">${Name}</h1>
              <h2 class="card-subtitle">Manager</h2>
              <ul class="list-group">
              <li class="list-group-item">Identification: ${ID}</li>
              <li class="list-group-item">Email Address: ${emailAddress}</li>
              <li class="list-group-item">Office Number: ${officeNumber}</li></ul>
            </div>
          </div>
        </div>`;
      } else if (Role === "Engineer") {
        let github = associate.fetchGithub();
        data = `
        <div class="col-sm-4">
          <div class="card" style="width: 300px;">
            <div class="card-body">
              <h1 class="card-title">${Name}</h1>
              <h2 class="card-subtitle">Engineer</h2>
              <ul class="list-group">
              <li class="list-group-item">Identification: ${ID}</li>
              <li class="list-group-item">Email Address: ${emailAddress}</li>
              <li class="list-group-item">Github Account: ${github}</li></ul>
            </div>
          </div>
        </div>`;
      } else {
        let school = associate.fetchSchool();
        data = `
        <div class="col-sm-4">
          <div class="card" style="width: 300px;">
            <div class="card-body">
              <h1 class="card-title">${Name}</h1>
              <h2 class="card-subtitle">Intern</h2>
              <ul class="list-group">
              <li class="list-group-item">Identification: ${ID}</li>
              <li class="list-group-item">Email Address: ${emailAddress}</li>
              <li class="list-group-item">Education: ${school}</li></ul>
            </div>
          </div>
        </div>`;
      }
      console.log("added team associate");
      resolve(data);
    });
  }
  module.exports = composeHtml;
