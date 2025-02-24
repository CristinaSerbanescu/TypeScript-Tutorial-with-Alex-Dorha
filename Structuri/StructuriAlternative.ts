//structurile sunt de doua feluri: alternative si  repetitive
//structuri alternative: if....else, switch...case
console.log("exemplul 1: if...else clasic");
function structuraifElseClasic() {
  if (7 > 5) {
    console.log("Numarul mai mare este 7.");
  } else {
    console.log("Numarul mai mare e 5");
  }
}

structuraifElseClasic();
console.log("------------------------------------------");

console.log("exemplul 2: switch...case");
let today = new Date();
function structuraSwitchCase(value: number) {
  switch (value) {
    case 1:
      console.log("Astazi este luni.");
      break;
    case 2:
      console.log("Astazi este marti.");
      break;
    case 3:
      console.log("Astazi este miercuri.");
      break;
    case 4:
      console.log("Astazi este joi.");
      break;
    case 5:
      console.log("Astazi este vineri.");
      break;
    case 6:
      console.log("Astazi este sambata.");
      break;
    case 7:
      console.log("Astazi este duminica.");
      break;
    default:
      console.log("Nu exista ziua respectiva.");
  }
}
structuraSwitchCase(3);
structuraSwitchCase(9);

console.log("------------------------------------------");

console.log("exemplul 3: if...else conditional operator");
7 > 5
  ? console.log("Numarul mai mare este 7.")
  : console.log("Numarul mai mare este 5");

console.log("------------------------------------------");

console.log("exemplul 4: if...else function v1");
function verificareNumarPar(value: number): boolean {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("exemplul 5: if...else function v2");
let rezultat = (value: number): boolean => (value % 2 == 0 ? true : false);
console.log(rezultat(2))

console.log("------------------------------------------");

let maxim = (nr1: number, nr2: number) : number => (nr1 > nr2) ? nr1 : nr2
console.log(maxim(7, 5));

(20>10) ? console.log("20 e mai mare"): console.log("20 e mai mic")