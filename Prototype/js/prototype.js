// https://refactoring.guru/uk/design-patterns/prototype

class Tesla{
    constructor(model,price,color, autopilot){
        this.model = model;
        this.price = price;
        this.color = color;
        this.autopilot = autopilot;
    }

    clone(){
        return new Tesla(this.model, this.price, this.color, this.autopilot);
    }

    showCarInfo() {
        console.log(
          `Model : ${this.model}\n Price : ${this.price}\n Color : ${this.color}\n Autopilot : ${this.autopilot}\n`
        );
    }

    setColor(color){
        this.color = color;
    }

    setPrice(price){
        this.price = price;
    }

    setAutopilot(autopilot){
        this.autopilot = autopilot;
    }
}

const prototype = new Tesla("X", 50000, "Red");

const car1 = prototype.clone();
car1.showCarInfo();
car1.setColor('Brown');
car1.setPrice(60000);
car1.setAutopilot(true);
car1.showCarInfo();

const car2 = prototype.clone();
car2.showCarInfo();
car2.setColor('White');
car2.setPrice(55000);
car2.setAutopilot(false);
car2.showCarInfo();
