// https://refactoring.guru/uk/design-patterns/decorator

class Car {
  constructor() {  
   this.color = "White";
   this.price = 10000;
   this.model = "Unknown";
  }

  getPrice(){
    return this.price;
  }

  getModel(){
    return this.model;
  }  

}

class Tesla extends Car{
  constructor(){
    super();
    this.price = 30000;
    this.model = "Tesla Model X";
  }
}


class AutoPilot{
  constructor(car){
    this.car = car;
  }

  getPrice(){
    console.log("Autopilot added");
    return this.car.getPrice() + 5000;
  }

  getDescription(){
    return `${this.car.getModel()} + autopilot`;
  }
}

let tesla = new Tesla();
console.log(tesla.getPrice());
tesla = new AutoPilot(tesla);
console.log(tesla.getPrice());
console.log(tesla.getDescription());