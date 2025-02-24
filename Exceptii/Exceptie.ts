//Sunt considerate ca fiind exceptii asemanatoare cu cele unchecked
//unchecked = exceptii care apar dupa compilarea codului
//putem defini exceptii custom cu ajutorul conceptului de clasa
//putem trata o exceptie cu ajutorul lui try .. catch .. finally
//putem arunca o exceptie cu throw new

// console.log(`Exepmpul 1 - throw new`);
// function syntaxError() {
//   let nume = "Cristina";
//   let numar = parseInt(nume);
//   if (isNaN(numar)) {
//     throw new SyntaxError(`Invalid number format`);
//   }
// }

// syntaxError();

console.log(`Exepmpul 2 - try catch finally`); //chiar daca try nu merge, se duce si pe finally
function tryCatchExample() {
  let rezultat: number;
  try {
    rezultat = 3 / 0;
    if (!isFinite(rezultat)) {
      throw new Error(`This is not a number`);
    }
  } catch (error) {
    console.log(`Calculul nu a fost facut cu succes ${error}`);
  } finally {
    console.log(`Nici din a doua incercare nu a reusit`);
  }
}

tryCatchExample();
