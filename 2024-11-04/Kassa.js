class Kassa {
  #artikel;
  #geldLade;
  constructor(betrag) {
    this.#artikel = [];
    this.#geldLade = geldLade;
  }
  scannen(artikel) {
    this.#artikel.push(artikel);
  }
  get offen() {
    let betrag = 0;
    this.#artikel.forEach((a) => (betrag += a.betrag));
  }
  bezahlen(geld) {
    if (geld < this.offen) {
      throw new Error("Zu wenig Geld");
    }
    const retour = geld - this.offen;
  }
  toString() {}
}
