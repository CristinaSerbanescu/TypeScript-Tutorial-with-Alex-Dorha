export class Masina {
  public model: string;
  public marca: string;
  public an: number;
  public nrKm: number;

  constructor(model: string, marca: string, an: number, nrKm: number) {
    this.model = model;
    this.marca = marca;
    this.an = an;
    this.nrKm = nrKm;
  }

  public prezentareMasina() {
    console.log(
      `Masina este de tipul ${this.model}, marca ${this.marca}, anul ${this.an} si are ${this.nrKm} km`
    );
  }
}



//intr-o clasa putem avea mai multi constructori = polimorfism
