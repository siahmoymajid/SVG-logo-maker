const { Circle, Square, Triangle } = require("./shapes.js");

describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle();
    var color = "green";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="60%" cy="60%" r="125%" height="100%" width="100%" fill="${color}">`
    );
  });
});
describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square();
    var color = "yellow";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="80" height="180" width="180" fill="${color}">`
    );
  });
});

describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle();
    var color = "red";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`
    );
  });
});
