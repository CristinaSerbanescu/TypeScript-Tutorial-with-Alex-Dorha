function mapExample1() {
  let obiecte: Map<string, string> = new Map<string, string>();
  obiecte.set("telefon", "iPhone");
  obiecte.set("laptop", "Lenovo");
  obiecte.set("accesoriu", "ghiozdan");

  console.log(obiecte);

  for (let key of obiecte.keys()) {
    console.log(`Cheia este: ${key}`);
    console.log(`Valoarea este: ${obiecte.get(key)}`);
  }

  obiecte.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });
}
mapExample1();
