function Katze(farbe, nervigkeit, gewicht, groesse) {
  this.farbe = farbe;
  this.nerv = nervigkeit;
  this.gewicht = gewicht;
  this.gros = groesse;
  this.tassenumwerfen = function () {
    if (this.nerv > 0.8 && this.gewicht > 10) {
      return "meow meow *splashcrack*";
    } else {
      return "sadmeow";
    }
  };
  this.boese = function () {
    if (this.nerv > 0.9 && (this.gewicht > 20 || this.gros > 60)) {
      return true;
    } else {
      return false;
    }
  };
}
//const normal = new Katze("schwarz", 0.5, 30, 50);
//console.log(normal.boese());
//console.log(normal.tassenumwerfen());
//console.log(normal);
const farben = ["schwarz", "weiß", "orange", "lila", "rot", "gelb"];
let katzen = [];
function vieleKatze() {
  for (let i = 0; i < 30; i++) {
    katzen[i] = new Katze(
      farben[Math.floor(Math.random() * farben.length)],
      Math.floor(Math.random() * 100) * 0.01,
      Math.trunc(Math.random() * 100),
      Math.trunc(Math.random() * 100)
    );
  }
}
vieleKatze();
console.log(katzen);
