const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

function svgFileContent({ text, textColor, shape, shapeColor }, shapeContent) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeContent}
    <text x="150" y="130" font-size="64" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;
}

inquirer.prompt([
  {
    type: "input",
    name: "text",
    message: "Text for the Logo (up to three characters)",
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      } else {
        return "Logo must be 3 characters or less";
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Choose a text color",
  },
  
  {
    type: "input",
    name: "shapeColor",
    message: "Pick a color for the shape",
  },
  {
    type: "list",
    name: "shape",
    message: "Type of shape",
    choices: ["circle", "square", "triangle"],
  },
])
.then((answers) => {
  let shapeContent = "";
  if(answers.shape === "circle") {
    const circle = new Circle();
    circle.setColor(answers.shapeColor);
    shapeContent = circle.render();
  } 
  else if (answers.shape === "square") {
    const square = new Square();
    square.setColor(answers.shapeColor);
    shapeContent = square.render();
  } 
  else if (answers.shape === "triangle") {
    const triangle = new Triangle();
    triangle.setColor(answers.shapeColor);
    shapeContent = triangle.render();
  } 
  else {
    console.log("Error");
  }
  const content = svgFileContent(answers, shapeContent);
  return fs.writeFile("./lib/logo.svg", content, (error) => 
  {
  error ? console.log(error) : console.log("Generated a SVG File!");
  });
  
})
.catch((error) => {
   console.log("Error: Cannot make file");
  });
  