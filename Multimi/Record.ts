//Record e un map mai simplu, nu are multe metode doar se focuseaza pe conceptul cheie/valoare, are MEREU cheia String
//gestioneaza informatiile mai OK
let recordMultime: Record<string, string | number> = {
  name: "Maria",
  age: 37,
  town: "Pitesti",
  job: "Tester",
};

recordMultime["firma"] = "Endava"; //adauga setul firma Endava
recordMultime["age"] = 29; //modifica age din 37 in 29
delete recordMultime["age"]; //sterge din record cheia si valoarea pt varsta

console.log(`Exemplul 1 afisare date din record`);

for (let [key, value] of Object.entries(recordMultime)) {
  console.log(`Entry-ul din record este: ${key} , ${value}`);
}
console.log(`Exemplul 2 afisare date din record`);

for (let key of Object.keys(recordMultime)) {
    console.log(`Entry-ul din record este: ${key} , ${recordMultime[key]}`);
}

const record: Record<string, number> = {
  key1: 1,
  key2: 2,
  key3: 3,
};

const map = new Map(Object.entries(record)); //ca sa transformam un record int-un map