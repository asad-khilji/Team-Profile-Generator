// create the team
const generateTeam = (team) => {
    // create the manager html
    const generateManager = (manager) => {
      return `
      <div class="column">    
      <div class="card employee-card">
          <div class="card-header">
              <h2 class="card-title">${manager.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
          <table>
          <tr>
              <td>ID: ${manager.getId()}</td>
          </tr>
          <tr>
              <td>Email: ${manager.getEmail()}</td>
          </tr>
          <tr>
              <td>Office Number: ${manager.getOfficeNumber()}</td>
          </tr>
      </table>
          </div>
      </div>
      </div>
          `;
    };
  
    // create the html for engineers
    const generateEngineer = (engineer) => {
      return `
      <div class="column">  
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
      <table>
      <tr>
          <td>ID: ${engineer.getId()}</td>
      </tr>
      <tr>
          <td>Email: ${engineer.getEmail()}</td>
      </tr>
      <tr>
          <td>GitHub: ${engineer.getGithub()}</td>
      </tr>
  </table>
      </div>
  </div>
  </div>
          `;
    };
  
    // create the html for interns
    const generateIntern = (intern) => {
      return `
      <div class="column"> 
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
      <table>
      <tr>
          <td>ID: ${intern.getId()}</td>
      </tr>
      <tr>
          <td>Email: ${intern.getEmail()}</td>
      </tr>
      <tr>
          <td>GitHub: ${intern.getSchool()}</td>
      </tr>
  </table>
      </div>
  </div>
  </div>
          `;
    };
  
    const html = [];
  
    html.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
  
    return html.join("");
  };
  
  // export function to generate entire page
  module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>

    <div class="row">
    ${generateTeam(team)}
    </div>

</main>

</body>
</html>
      `;
  };