var fs = Require ('fs');
var data = fs.readFileSync('database.json');
var task1 = JSON.parse(data);


var fs = Require ('fs');

try{
  if (fs.existsSync(process.argv[2])){
    var data = fs.readFileSync(process.argv[2]);
  }else{
    var data = fs.readFileSync('database.json');
  }
  var task1 = JSON.parse(data);
}
catch(errors){
  console.error(errors);
}
/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n" || text === "exit\n") {
    text = text.replace("\n", " ");
    quit();
  } else if (text.startsWith("hello") || text === "hello\n") {
    hello(text);
  } else if (text === "help\n") {
    help();
  } else if (text === "add\n" || text.startsWith("add")) {
    add(text);
  } else if (text === "list\n") {
    list();
  } else if (text.startsWith("remove")) {
    remove(text);
  } else if (text.startsWith("edit")) {
    edit(text);
  } else if (text.startsWith("check")) {
    check(text);
  } else if (text.startsWith("uncheck")) {
    uncheck(text);
  } else {
    unknownCommand(text);
  }
}

/**
 * @param  {string} text1
 * @returns {void}
 */

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
// function hello() {
//   console.log("hello!");
// }

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  //  var txt = text.substring()
  console.log(text.trim() + "!");
}
/**
 * hello !
 *
 * @returns {void}
 */

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  var data= JSON.stringify(task1, null, 2)
  if (fs.existsSync(process.argv[2])){
    fs.writeFileSync(process.argv[2],data, 'utf8');
  }else fs.writeFileSync('database.json',data, 'utf8');  console.log("Quitting now, goodbye!");
  process.exit();
}

/**
 * help:Lists all the commands
 *
 * @returns {void}
 */
function help() {
  console.log(
    "add:add new element to list\nremove:remove the last element from list\nremove1:remove first element from list\n remove2:remove the second elemnet from list\nhello text:give hello text!\nhello:Says hello!\nquit:Exits the app\nquit:Exits the app\ncheck:task is done\nuncheck:to uncheck task is not done"
  );
}

let tasks = ["add", "remove", "edit", "change"];

function list() {
  tasks.map((i) => console.log(tasks.indexOf(i) + 1 + " " + i));
}
/**
 * list tasks
 *
 * @returns {void}
 */
var done = false;
function lista() {
  tasks.forEach(function callarray(val, n1) {
    if (done) {
      console.log(n1 + 1 + " - [✓] " + val);
    } else console.log(n1 + 1 + " - [ ] " + val);
  });
}

function add(text) {
  if (text.slice(3).trim() == "") console.log("Error");
  else {
    tasks.push(text.slice(3).trim());
    console.log("");
  }
}

function remove(text) {
  if (text.slice(6).trim() == "") {
    tasks.pop();
  } else {
  }
  if (parseInt(text.substring(6)) > tasks.length) {
    console.log("number doesn't exist");
  } else {
    tasks.splice(parseInt(text.substring(6)) - 1, 1);
  }
}
function edit(text) {
  if (text === "edit\n") {
    console.log("error!");
  } else if (isNaN(parseInt(text.trim().split(" ")[1]))) {
    console.log("edit new text");
    tasks[tasks.length - 1] = text.substring(5, text.length);
  } else {
    tasks[parseInt(text.trim().split(" ")[1]) - 1] = text.substring(6);
  }
}

function check(text) {
  if (text.slice(5).trim() == "") {
    console.log("error");
  } else {
    tasks[parseInt(text.slice(6).trim()) - 1].done = true;
  }
}
//uncheck
function uncheck(text) {
  if (text.slice(7).trim() == "") {
    console.log("error");
  } else {
    tasks[parseInt(text.slice(8).trim()) - 1].done = false;
    
  }
}
let listnew = [
  { task: "wakeup early", done: true },
  { task: "breackfast", done: false },
  { task: "sport", done: false },
  { task: "study", done: true },
  { task: "sleep", done: true },
];
// The following line starts the application
startApp("Fatina Elomar");
// add exit
