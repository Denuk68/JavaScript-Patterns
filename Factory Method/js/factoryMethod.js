// https://refactoring.guru/uk/design-patterns/factory-method

class Tesla {
  constructor(model, price, color) {
    this.price = price;
    this.model = model;
    this.color = color;
  }
  showCarInfo() {
    console.log(
      `Model : ${this.model}\n Price : ${this.price}\n Color : ${this.color}\n`
    );
  }
}

class TeslaFactory {
  create(type) {
    if (type === "X") {
      return new Tesla(type, 50000, "Blue");
    }
    if (type === "Y") {
      return new Tesla(type, 70000, "Red");
    }
  }
}

let factory = new TeslaFactory();

let X = factory.create("X");
X.showCarInfo();

let Y = factory.create("Y");
Y.showCarInfo();