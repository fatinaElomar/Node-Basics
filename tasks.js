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
  } 
  else if (text === 'add\n' || text.startsWith('add') ){
    add(text);
  } 
  else if (text === "list\n") {
    list();
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
  console.log("Quitting now, goodbye!");
  process.exit();
}

/**
 * help:Lists all the commands
 *
 * @returns {void}
 */
function help() {
  console.log(
    "hello text:give hello text!\nhello:Says hello!\nquit:Exits the app\nquit:Exits the app\n"
  );
}
let tasks = ["add", "remove", "edit", "change"];

function list() {
  tasks.map((i)=>
 console.log(tasks.indexOf(i)+1+" "+i));
}
function add(text){
  if
    (text.slice(3).trim() == "" )
    console.log("Error")

  else {
    tasks.push(text.slice(3).trim())
    console.log("")
 }}


// The following line starts the application
startApp("Fatina Elomar");
// add exit
