const inquire = require('inquire');
const = require ('fs');
const square = require('./square.js');
const circle = require('./circle.js');
const triangle = require('./triangle.js');

function svgFileContent({ text, TextColor,shape,ShapeColor},shapeContent){
  return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
  ${shapeContent}
 <text x="180" y="130" font-size="64" text-anchor="middle" fill="${colorText}">${text}</text>
</svg>';

}

inquire.prompt([
  {
    type: "input",
    name:"text",
    message: "Text for the Logo(up to three characters)",
    validate: function(input){
      if(input.length <=3){
        return true;
      }
      else {
        return "Logo must be 3 characters or less"
      }
  
    }
  },
{
  type: "input",
  name: "TextColor",
  message: "Choose a text color",
  choices: ["red","green","blue", "black","pink","yellow","brown",]
},
{
  type: "list",
  name:"shape",
  message: "Type of shape",
  choices: ["circle","square","triangle"]
  
},

{
  type: "inpute",
  name: "shapeColor",
  message: "pick a color for the shape",
},
])

.then((answers)=>{
  const shapeContent ="",
  if (answers.shape == "circle") {
    const circle = new circle();
    circle.setcolor(answers.ShapeColor);
    shapeContent = circle.render();
  }
  else if (answers.shape == "square") {
    const square = new square();
    square.setcolor(answers.ShapeColor);
    shapeContent = square.render();
    
  }
  else if (answers.shape == "triangle") {
    const triangle = new triangle();
    triangle.setcolor(answers.ShapeColor);
    shapeContent = square.render();
  }
  else{
    console.log (Error);
  }
  const content = svgFileContent(answers,shapeContent);
  fs.writeFile("logo.svg", content, (error)=>
  error? console.log( error) :console.log(Made a SVG File!)
  );
    
})
.catch((error)=>{
  console.Console.log("error cannot make file");
})

