// #!/usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";

// // Function to create project structure
// function createProjectStructure(projectType, projectName, packageManager, features) {
//   console.log(chalk.green.bold("\nCreating project structure..."));
//   console.log(chalk.cyan(`Project Type: ${projectType}`));
//   console.log(chalk.cyan(`Project Name: ${projectName}`));
//   console.log(chalk.cyan(`Package Manager: ${packageManager}`));
//   console.log(chalk.cyan(`Additional Features: ${features.join(", ")}`));
//   console.log(chalk.green.bold("✔ Project structure created successfully!"));
// }

// // Function to handle bug fixing
// function fixBugs(filePath, bugType, errorMessage, expectedBehavior, actualBehavior, codeSnippet) {
//   console.log(chalk.green.bold("\nAnalyzing the bug..."));
//   console.log(chalk.cyan(`File Path: ${filePath}`));
//   console.log(chalk.cyan(`Bug Type: ${bugType}`));
//   console.log(chalk.cyan(`Error Message: ${errorMessage}`));
//   console.log(chalk.cyan(`Expected Behavior: ${expectedBehavior}`));
//   console.log(chalk.cyan(`Actual Behavior: ${actualBehavior}`));
//   console.log(chalk.cyan(`Code Snippet: ${codeSnippet}`));
//   console.log(chalk.green.bold("✔ Bug analysis complete!"));
// }

// // Main function
// async function main() {
//   console.log(chalk.bold.cyan("Welcome to the Project Manager and Bug Fixer! 🛠️"));

//   // Step 1: Ask the user what they want to do
//   const { action } = await inquirer.prompt({
//     type: "list",
//     name: "action",
//     message: "What do you want to do?",
//     choices: [
//         chalk.red("Create Project Structure"),
//         chalk.green("Fix Bugs in Code")],
//   });

//   if (action === chalk.red("Create Project Structure")) {
//     // Step 2: Ask project-related questions
//     const answers = await inquirer.prompt([
//       {
//         type: "list",
//         name: "projectType",
//         message: "What type of project do you want to create?",
//         choices: ["React (JavaScript)", "React (TypeScript)", "Node.js Backend", "Static HTML/CSS/JS", "Other (Custom)"],
//       },
//       {
//         type: "input",
//         name: "projectName",
//         message: "What do you want to name your project?",
//       },
//       {
//         type: "list",
//         name: "packageManager",
//         message: "Which package manager do you want to use?",
//         choices: ["npm", "yarn", "pnpm"],
//       },
//       {
//         type: "checkbox",
//         name: "features",
//         message: "Do you want to add any additional features?",
//         choices: ["ESLint (Code Linting)", "Prettier (Code Formatting)", "Docker Support", "GitHub Actions (CI/CD)"],
//       },
//     ]);

//     // Create project structure
//     createProjectStructure(answers.projectType, answers.projectName, answers.packageManager, answers.features);
//   } else if (action === "Fix Bugs in Code") {
//     // Step 2: Ask bug-related questions
//     const answers = await inquirer.prompt([
//       {
//         type: "input",
//         name: "filePath",
//         message: "Which file has the bug or needs to be checked?",
//       },
//       {
//         type: "list",
//         name: "bugType",
//         message: "What type of bug do you think it is?",
//         choices: ["Syntax Error", "Runtime Error", "Logical Error", "Performance Issue", "Don't Know"],
//       },
//       {
//         type: "input",
//         name: "errorMessage",
//         message: "Did you receive any error message? If yes, please paste it here.",
//       },
//       {
//         type: "input",
//         name: "expectedBehavior",
//         message: "What was your code supposed to do?",
//       },
//       {
//         type: "input",
//         name: "actualBehavior",
//         message: "What is your code currently doing?",
//       },
//       {
//         type: "input",
//         name: "codeSnippet",
//         message: "Can you share the code snippet where the bug exists?",
//       },
//     ]);

//     // Fix bugs
//     fixBugs(
//       answers.filePath,
//       answers.bugType,
//       answers.errorMessage,
//       answers.expectedBehavior,
//       answers.actualBehavior,
//       answers.codeSnippet
//     );
//   }
// }

// // Run the program
// main();



//--------------------------------------------------------------------------------------//
//                              new code with color text :
//--------------------------------------------------------------------------------------//
/**
 * jab bhi ye file run karna ho to "npm install inquirer chalk" karna and node_modules download kar lena
 * and iss file ko run karne me ek error aa rahi thi,
 * 
 * import inquirer from "inquirer";
 * ^^^^^^
 * SyntaxError: Cannot use import statement outside a module
 * 
 * so ye problem package.json me "type": "module" ye likhne se solve ho gayi.
 */



//#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// const inquirer = require("inquirer")
// const chalk = require("chalk")

// Function to create project structure
function createProjectStructure(projectType, projectName, packageManager, features) {
  console.log(chalk.green.bold("\n🚀 Creating project structure..."));
  console.log(chalk.yellowBright(`📌 Project Type: ${chalk.cyan.bold(projectType)}`));
  console.log(chalk.yellowBright(`📂 Project Name: ${chalk.cyan.bold(projectName)}`));
  console.log(chalk.yellowBright(`📦 Package Manager: ${chalk.cyan.bold(packageManager)}`));
  console.log(chalk.yellowBright(`🛠️ Additional Features: ${chalk.cyan.bold(features.join(", ")) || "None"}`));
  console.log(chalk.green.bold("\n✅ Project structure created successfully!"));
}

// Function to handle bug fixing
function fixBugs(filePath, bugType, errorMessage, expectedBehavior, actualBehavior, codeSnippet) {
  console.log(chalk.red.bold("\n🐞 Analyzing the bug..."));
  console.log(chalk.magenta(`📂 File Path: ${chalk.white.bold(filePath)}`));
  console.log(chalk.magenta(`⚠️ Bug Type: ${chalk.white.bold(bugType)}`));
  console.log(chalk.magenta(`🚨 Error Message: ${chalk.white.bold(errorMessage || "No error message provided")}`));
  console.log(chalk.magenta(`🎯 Expected Behavior: ${chalk.white.bold(expectedBehavior)}`));
  console.log(chalk.magenta(`❌ Actual Behavior: ${chalk.white.bold(actualBehavior)}`));
  console.log(chalk.magenta(`📜 Code Snippet:\n${chalk.gray(codeSnippet)}`));
  console.log(chalk.green.bold("\n✅ Bug analysis complete!"));
}

// Main function
async function main() {
  console.log(chalk.bold.bgBlue.white("\n  Welcome to the Project Manager and Bug Fixer! 🛠️  \n"));

  // Step 1: Ask the user what they want to do
  const { action } = await inquirer.prompt({
    type: "list",
    name: "action",
    message: chalk.yellow("What do you want to do?"),
    choices: [
      chalk.green("🚀 Create Project Structure"), 
      chalk.red("🐞 Fix Bugs in Code")
    ],
  });

  if (action === chalk.green("🚀 Create Project Structure")) {
    // Step 2: Ask project-related questions
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "projectType",
        message: chalk.yellow("What type of project do you want to create?"),
        choices: [
          chalk.blue("React (JavaScript)"),
          chalk.blue("React (TypeScript)"),
          chalk.green("Node.js Backend"),
          chalk.magenta("Static HTML/CSS/JS"),
          chalk.cyan("Other (Custom)")
        ],
      },
      {
        type: "input",
        name: "projectName",
        message: chalk.yellow("What do you want to name your project?"),
      },
      {
        type: "list",
        name: "packageManager",
        message: chalk.yellow("Which package manager do you want to use?"),
        choices: [
          chalk.red("npm"),
          chalk.green("yarn"),
          chalk.cyan("pnpm")
        ],
      },
      {
        type: "checkbox",
        name: "features",
        message: chalk.yellow("Do you want to add any additional features?"),
        choices: [
          chalk.blue("ESLint (Code Linting)"),
          chalk.green("Prettier (Code Formatting)"),
          chalk.magenta("Docker Support"),
          chalk.cyan("GitHub Actions (CI/CD)")
        ],
      },
    ]);

    // Create project structure
    createProjectStructure(answers.projectType, answers.projectName, answers.packageManager, answers.features);
  } else if (action === chalk.red("🐞 Fix Bugs in Code")) {
    // Step 2: Ask bug-related questions
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "filePath",
        message: chalk.yellow("Which file has the bug or needs to be checked?"),
      },
      {
        type: "list",
        name: "bugType",
        message: chalk.yellow("What type of bug do you think it is?"),
        choices: [
          chalk.red("Syntax Error"),
          chalk.yellow("Runtime Error"),
          chalk.blue("Logical Error"),
          chalk.green("Performance Issue"),
          chalk.cyan("Don't Know")
        ],
      },
      {
        type: "input",
        name: "errorMessage",
        message: chalk.yellow("Did you receive any error message? If yes, please paste it here."),
      },
      {
        type: "input",
        name: "expectedBehavior",
        message: chalk.yellow("What was your code supposed to do?"),
      },
      {
        type: "input",
        name: "actualBehavior",
        message: chalk.yellow("What is your code currently doing?"),
      },
      {
        type: "input",
        name: "codeSnippet",
        message: chalk.yellow("Can you share the code snippet where the bug exists?"),
      },
    ]);

    // Fix bugs
    fixBugs(
      answers.filePath,
      answers.bugType,
      answers.errorMessage,
      answers.expectedBehavior,
      answers.actualBehavior,
      answers.codeSnippet
    );
  }
}
// Run the program
main();

//----------------------------------------------------------------------------------------------------------//
//                                   answers of question of fix bug in code:
//----------------------------------------------------------------------------------------------------------//
/**
 * answers of question of fix bug in code:
 * Welcome to the Project Manager and Bug Fixer! 🛠️

? What do you want to do?
  1. Create Project Structure
  2. Fix Bugs in Code
> 2

? Which file has the bug or needs to be checked?
> ./src/App.js

? What type of bug do you think it is?
  1. Syntax Error
  2. Runtime Error
  3. Logical Error
  4. Performance Issue
  5. Don't Know
> 2

? Did you receive any error message? If yes, please paste it here.
> TypeError: Cannot read property 'map' of undefined

? What was your code supposed to do?
> Render a list of users.

? What is your code currently doing?
> Throwing an error and not rendering anything.

? Can you share the code snippet where the bug exists?
> const users = null; users.map(user => <div>{user.name}</div>);

Analyzing the bug...
File Path: ./src/App.js
Bug Type: Runtime Error
Error Message: TypeError: Cannot read property 'map' of undefined
Expected Behavior: Render a list of users.
Actual Behavior: Throwing an error and not rendering anything.
Code Snippet: const users = null; users.map(user => <div>{user.name}</div>);
✔ Bug analysis complete!
 */