//add elements to an array
let cars: string[] = ["Mazda", "Toyota", "bmw"];
cars.push("Dacia");
for (let car of cars) {
  console.log(car);
}
console.log("****************");
//replace an element
cars[1] = "Audi";
for (let car of cars) {
  console.log(car);
}
console.log("****************");
//trim the array
let trimedCars = cars.slice(0, 2);

for (let car of trimedCars) {
  console.log(car);
}
console.log("****************");
//delete last element of the array
let newCars: Array<string> = ["Dacia", "Opel", "Mazda", "Toyota", "bmw"];
newCars.pop();
for (let car of newCars) {
  console.log(car);
}
console.log("****************");
//delete first element of the array
let newCars1: Array<string> = ["Dacia", "Opel", "Mazda", "Toyota", "bmw"];
newCars1.shift();
for (let car of newCars1) {
  console.log(car);
}
console.log("****************");

let myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers);
console.log("****************");
myNumbers[2] = 15;
console.log(myNumbers);
console.log("****************");
myNumbers.push(113);
console.log(myNumbers);
console.log("****************");
myNumbers.pop();
console.log(myNumbers);
console.log("****************");
myNumbers.shift();
console.log(myNumbers);
console.log("****************");
myNumbers[1] = 115
console.log(myNumbers);
console.log("****************");
myNumbers.push(118, 119, 120)
console.log(myNumbers);
console.log("****************");
let myNewNumbers = myNumbers.slice(1, 5)
console.log(myNewNumbers);
console.log("****************");
