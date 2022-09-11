var readLineSync = require("readline-sync");
var news = readLineSync.question("Enter your news:").toLowerCase;
var source = readLineSync.question("Enter source of news:").toLocaleLowerCase;
if (source === "facebook" || source === "whatsapp" || source === "telegram") {
  console.log("It is fake");
}
else {
  console.log("Your news is reliable");
}