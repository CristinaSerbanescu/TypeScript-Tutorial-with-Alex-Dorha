//seturile nu prmit elemente duplicate
function setExample() {
  let cars: Set<string> = new Set();
  cars.add("Toyota");
  cars.add("BMW");
  cars.add("Volvo");
  cars.add("BMW");

  // console.log(cars);
  cars.forEach((car) => {
    console.log(car);
  });

  cars = new Set([...cars, "Dacia", "Opel"]);
  cars.forEach((car) => {
    console.log(`New cars are: ${car}`);
  });

  console.log(`Toate masinile din 2024 sunt: ${[...cars].join(", ")}`);

    let masini2025 = ["Audi", "Renault"];
    let depozit = [...cars, ...masini2025].join(", ")
    console.log(`Toate masinile din depozit sunt: ${depozit}`);

}
setExample();
