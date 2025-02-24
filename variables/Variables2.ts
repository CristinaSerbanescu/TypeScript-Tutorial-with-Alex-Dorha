//primitive or non primitive
let myName = "Cristina";
let personName: string = "Ioana";
let myAge = 20.5;
let isEmployed = true;
let gender = 'F';

console.log(personName)
console.log("My name is" + " " + personName)
console.log(`Person name Surname and age is: ${myName} ${personName} ${myAge}`)

//variabile explicite folosite doar in TS nu si in JS
//in TS avem posibilitatea sa specificam tipul unei variabile
//pe langa tipul unei variabile, putem specifica si modalitatea prin care sa primeasca o valoare
let personName1: string = "Ioana";
let curs: any = "Playwright";
let curs1: unknown = 28;
let curs2: undefined = undefined;//variabila este declarata dar nu are o valoare atribuita
let curs3: null = null;
// De preferat sa folosim cat mai mult unknown

//o variabila poate fi definita si cu var dar nu e deloc recomandat, ne roafa sa folosim let pt ca la var ramane valoarea fixata acolo

var cursant1 = "Alex";

//definim o constanta
let  caiet:string = "rosu";
caiet = "negru"
var  caiet1:string = "rosu";
caiet = "negru"

