import { Masina } from "./Masina";

let AudiA3 = new Masina("A3", "Audi", 2020, 20000);
AudiA3.prezentareMasina();

let BMWX6 = new Masina("X6", "BMW", 2021, 15000);
BMWX6.nrKm = 10000; // putem modifica proprietatile
BMWX6.prezentareMasina();
