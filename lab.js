const { execSync } = require('child_process');

const UserName = execSync('git config user.name', {encoding: "utf-8"}).trim();

console.log("Hello, " + UserName + "!");
