// functia nu e obligatoriu sa fie in interiorul unei clase, metodele sunt obligatoriu in interiorul unei clase

console.log("--------------------FUNCTIE SIMPLA--------------------");
function functieSimpla(): void {
  let nume: string = "Cristina";
  let prenume: string = "Ioana";
  console.log(`Numele si prenumele sunt: ${nume} ${prenume}`);
}

functieSimpla();

console.log("--------------------FUNCTIE CU PARAMETRII--------------------");
function functieParametrii(nume: string, prenume: string): void {
  console.log(`Numele si prenumele sunt: ${nume} ${prenume}`);
}

functieParametrii("Serbanescu", "Cristina");
functieParametrii("Ciomos", "Mihai");

console.log("--------------------OPERATORI ARITMETICI--------------------");

function functieOperatoriAritmetici(): void {
  let numar1 = 10;
  let numar2 = 55;
  let calcul = numar1 + numar2;
  console.log(`Suma celor doua numere este = ${calcul}`);
}

functieOperatoriAritmetici();

console.log("--------------------OPERATORI ASIGNARE--------------------");

function functieOperatoriAsignare(): void {
  let numar1 = 10;
  numar1 += 55;
  console.log(numar1);
}

functieOperatoriAsignare();

console.log("--------------------OPERATORI DE COMPARARE--------------------");

function functieOperatoriComparare(): void {
  let numar1 = 10;
  let numar2: string | number = 20;
  console.log(numar1 === numar2);
}
functieOperatoriComparare();

console.log("--------------------OPERATORI LOGICI--------------------");

function functieOperatoriLogici(): void {
  let variabila = 3;
  let numar1 = 10;
  console.log(variabila && numar1);
  console.log(variabila || numar1);
  console.log(variabila & numar1);
}

functieOperatoriLogici();
//tema care e diferenta dintre un & si && console.log(variabila && numar1)

/*  
&& verifică valorile de truthiness.
variabila = 3 (valoare adevărată) și numar1 = 10 (valoare adevărată).
Deoarece primul operand (variabila) este adevărat, operatorul trece la al doilea operand (numar1) și îl returnează.
Rezultat: 10.
console.log(variabila || numar1)

|| este operatorul OR logic scurt-circuitat.
Verifică valorile de truthiness.
Dacă primul operand este adevărat (variabila = 3), returnează primul operand și nu mai evaluează al doilea.
Rezultat: 3.
console.log(variabila & numar1)

& face o operație bit cu bit între valorile numerice 3 și 10.
În binar:
3 = 00000011
10 = 00001010
Operația AND bit cu bit:
00000011
00001010
00000010 (în zecimal: 2).
Rezultat: 2, nu 3.*/
console.log("--------------------OPERATORI TYPE--------------------");

function functieOperatorType(): void {
  let numar = 10;
  console.log(typeof numar);
}

functieOperatorType();

console.log("--------------------OPERATORI OPTIONALI--------------------");

function functieParametruOptional(
  nume: string,
  prenume: string,
  varsta?: number
): void {
  if (varsta) {
    console.log(`Numele si prenumele sunt: ${nume} ${prenume} ${varsta}`);
  } else {
    console.log(`Numele si prenumele sunt: ${nume} ${prenume}`);
  }
}

functieParametruOptional("Serbanescu", "Cristina");
functieParametruOptional("Serbanescu", "Cristina", 48);

console.log("--------------------ARROW FUNCTION--------------------");

const arrowFunctionPrint = (
  nume: string,
  prenume: string,
  varsta?: number
): void => {
  if (varsta) {
    console.log(`Numele si prenumele sunt: ${nume} ${prenume} ${varsta}`);
  } else {
    console.log(`Numele si prenumele sunt: ${nume} ${prenume}`);
  }
};
arrowFunctionPrint("Mihai", "Calin");

console.log("--------------------FUNCTIE CU RETURN--------------------");

function getNume(): string {
  let nume = "Mihai";
  return nume;
}

console.log(getNume())