class Person {
  constructor(name, geschlecht, groesseM, gewichtKG) {
    this.name = name;
    this.geschlecht = geschlecht;
    this.groesseM = groesseM;
    this.gewichtKG = gewichtKG;
    if (geschlecht !== "m" && geschlecht !== "f") {
      throw new Error("Wrong gender");
    }
  }
  toString() {
    return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
  }
  getBmi() {
    return this.gewichtKG / Math.pow(this.groesseM, 2);
  }
  vorName() {
    return this.name.split(" ", 1)[0];
  }
  nachName() {
    return this.name.split(" ")[1];
  }
  groesseCM() {
    return this.groesseM * 100;
  }
  getGewichtType() {
    if (this.gender === "f") {
      this.getBmi() - 1;
    }
    if (this.getBmi() > 20 && this.getBmi() < 25) return "Normalgewicht";
    if (this.getBmi() > 25) return "Übergewicht";
    if (this.getBmi() < 20) return "Untergewicht";
  }
}
new Person("John Doe", "m", 1.8, 80);
new Person("Eva Schwerlich", "f", 1.6, 120);
new Person("Peter Leicht", "m", 1.9, 50);
export { Person };
