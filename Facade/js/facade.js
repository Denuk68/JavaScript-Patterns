// https://refactoring.guru/uk/design-patterns/facade

class CarFactory{
    setEngine(){
        console.log("Set engine")
    }
    setColor(){
        console.log("Set color")
    }
    setWheels(){
        console.log("Set Wheels")
    }
    setBody(){
        console.log("Set Body")
    }
}

class CarFactoryFacade{
    constructor(car){
        this.car = car;
    }

    startAssambly(){
        this.car.setBody();
        this.car.setEngine();
        this.car.setColor();
        this.car.setWheels();
    }
}

let cf = new CarFactory();
cf = new CarFactoryFacade(cf)
cf.startAssambly();