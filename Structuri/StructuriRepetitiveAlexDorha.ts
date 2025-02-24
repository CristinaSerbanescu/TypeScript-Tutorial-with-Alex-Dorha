console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log("*********************");
console.log("Exemplul 1 for clasic");
function forClassic() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
forClassic();
console.log("*********************");
console.log("Exemplul 2 while");
function whileLoop() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}
whileLoop();
console.log("*********************");
console.log("Exemplul 3 do...while");
function doWhile() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}
doWhile();
console.log("*********************");
console.log("Exemplul 4 for in");
function forIn() {
  let colegi: string[] = ["Alex", "Ioana", "George", "Matei", "Andrei"];
  for (let i in colegi) {
    console.log("Pozitia elementului este " + i);
    console.log("Valoarea elementului este: " + colegi[i]);
  }
}
forIn();
console.log("*********************");
console.log("Exemplul 5 for of");
function forOf() {
  let colegi: string[] = ["Alex", "Ioana", "George", "Matei", "Andrei"];
  for (let coleg of colegi) {
    console.log("Valoarea elementului este: " + coleg);
  }
}
forOf();
console.log("*********************");
console.log("Exemplul 6 numaram primele 5 numere pare din interval");
function calculNrPar() {
  let nr = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
      nr++;
    }
    if (nr == 5) {
      break;
    }
  }
}
calculNrPar();
console.log("*********************");
console.log("Exemplul 7 forEach");
function forEachElement() {
  let colegi: string[] = ["Alex", "Ioana", "George", "Matei", "Andrei"];
  colegi.forEach((coleg) => {
    console.log(coleg);
  });
}
forEachElement()