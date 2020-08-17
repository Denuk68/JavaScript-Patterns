// https://refactoring.guru/uk/design-patterns/abstract-factory

function teslaCreator(kind) {
//   return kind === "sport" ? sportCarFactory : crossoverCarFactory;
if (kind === "sport"){
    return sportCarFactory;
}
else if (kind === "crossover"){
    return crossoverCarFactory;
}
}

function sportCarFactory() {
    return new ModelX();
}
function crossoverCarFactory() {
    return new Cebertruck();
}



class ModelX {
  ShowCarInfo() {
    return "Sport car ModelX";
  }
}
class Cebertruck {
  ShowCarInfo() {
    return "Crossover car CeberTruck";
  }
}

const creator = teslaCreator("sport");
const myCar = new creator();
console.log(myCar.ShowCarInfo());
