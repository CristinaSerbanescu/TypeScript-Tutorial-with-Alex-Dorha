function exampleOneArray() {
  let masini: String[] = new Array();
  masini[0] = "WV";
  masini[1] = "Volvo";
  masini[2] = "Opel";

  console.log(`Lista initiala este: ${masini}`);
  console.log(`Lista initiala contine ${masini.length} elemente.`);
  masini[1] = "Audi";

  console.log(`Lista modificata este: ${masini}`);
  console.log(`Lista modificata contine ${masini.length} elemente.`);

  masini.unshift("BMW"); //adauga element la inceputul listei
  console.log(`Lista modificata este: ${masini}`);
  console.log(`Lista modificata contine ${masini.length} elemente.`);

  masini.push("Ford", "Dacia", "Seat", "Tesla"); //adauga elemente la finalul listei
  console.log(`Lista modificata este: ${masini}`);
  console.log(`Lista modificata contine ${masini.length} elemente.`);

  masini.splice(masini.length, 0, "Renault", "Ferrari");
  console.log(`Lista modificata este: ${masini}`);
  console.log(`Lista modificata contine ${masini.length} elemente.`);

  masini.splice(0, 0, "Renault", "Ferrari");
  console.log(`Lista modificata este: ${masini}`);
  console.log(`Lista modificata contine ${masini.length} elemente.`);

  masini.pop(); //sterge ultimul element cu totul
  console.log(`Lista modificata dupa pop este: ${masini}`);
  console.log(`Lista modificata dupa pop contine ${masini.length} elemente.`);

  delete masini[3]; //sterge valoarea elementului cu index 3 dar el ramane in array GOL
  delete masini[masini.length - 1]; //sterge valoarea ultimului element dar el ramane in array GOL
  console.log(`Lista modificata dupa delete este: ${masini}`);
  console.log(
    `Lista modificata dupa delete contine ${masini.length} elemente.`
  );

  masini.splice(masini.length - 1, 1);
  masini.splice(3, 1);
  console.log(`Lista modificata dupa splice este: ${masini}`);
  console.log(
    `Lista modificata dupa splice contine ${masini.length} elemente.`
  );
}

exampleOneArray();

function exampleTwoArray() {
  let elemente: Array<string | number | boolean> = ["Carte", 28, true];

  console.log(elemente);
  console.log(`Elementele din array sunt: ${elemente}`);
  console.log("Elementele sunt" + elemente);
  console.log(elemente);
}

exampleTwoArray();
