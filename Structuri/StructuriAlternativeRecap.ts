//if else clasic
if (7 > 8) {
  console.log("Numarul mai mare este sapte");
} else {
  console.log("Numarul mai mic este 7");
}
//if else function classic
function ifElseClasic() {
  if (7 > 8) {
    console.log("Numarul mai mare este sapte");
  } else {
    console.log("Numarul mai mic este 7");
  }
}
ifElseClasic();

//if else operational
let rezultat1 = (val: number): boolean => (val % 2 == 0 ? true : false);
console.log(rezultat(15));

let numarulMaiMicEste = (nr1: number, nr2: number): number =>
  nr1 > nr2 ? nr2 : nr1;
console.log(numarulMaiMicEste(8, 5));
console.log(numarulMaiMicEste(8, 15));
//switch
function ceZiEAzi(day: number) {
  switch (day) {
    case 1:
      console.log("Astazi este luni!");
      break;
    case 2:
      console.log("Astazi este marti!");
      break;
    case 3:
      console.log("Astazi este miercuri!");
      break;
    case 4:
      console.log("Astazi este joi!");
      break;
    case 5:
      console.log("Astazi este vineri!");
      break;
    case 6:
      console.log("Astazi este sambata!");
      break;
    case 7:
      console.log("Astazi este duminica!");
      break;
    default:
      console.log("Ziua nu exista!");
  }
}
ceZiEAzi(1);
ceZiEAzi(12);
ceZiEAzi(5);
