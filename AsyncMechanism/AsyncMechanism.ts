function obtineDateSimulator(callback: (date: string) => void): void {
  setTimeout(() => {
    callback("Date obtinute prin callback.");
  }, 1000);
}

function obtineDatePromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Date obtinute prin promise");
    }, 1000);
  });
}

//exemplu folosind callback
function exempluCallback(): void {
  obtineDateSimulator((date) => {
    console.log("Rezultatul cu callback: ", date);
  });
}

exempluCallback();

//exemplu folosind Promise chaining

function exempluPromise(): void {
  obtineDatePromise()
    .then((date) => {
      console.log("Rezultatul cu promise este: ", date);
    })
    .catch((error) => {
      console.log("Eroare: ", error);
    });
}

exempluPromise();

//exemplu folosind async/await
async function exempluAsyncAwait(): Promise<void> {
  try {
    let rezultat = await obtineDatePromise();
    console.log("Rezultatul cu async/await este: ", rezultat);
  } catch (error) {
    console.log("Eroare: ", error);
  }
}

 exempluAsyncAwait();
