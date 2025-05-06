const Motorpreis = 0;
const Pedalpreis = 1;
let AutoAnzahl = 0;
let UpgradeAnzahl = [0, 0];
let Pedalanzahl = 0;
let bonus = 1;
let SekundenBonus = 0;
let UpgradeAnzahlDOMN = document.getElementsByClassName("upgradeMenge");
let upgradePreiseDOM = document.getElementsByClassName("upgradePreis");
let upgradePreise = [20, 10];
let Inkremente = [0, 0];
let Inkrementationsinkrement = [0, 0];

function render() {
  document.getElementById("Autos").innerHTML =
    "Autos: " + Math.floor(AutoAnzahl * 10) / 10;
  if (bonus > 1) {
    document.getElementById("bonus").innerHTML = bonus + " Autos/click";
  }
  for (let i = 0; i < upgradePreiseDOM.length; i++) {
    upgradePreiseDOM[i].innerHTML = upgradePreise[i] + " Autos";
    UpgradeAnzahlDOMN[i].innerHTML = UpgradeAnzahl[i];
    if (upgradePreise[i] > AutoAnzahl) {
      upgradePreiseDOM[i].style.color = "red";
    } else {
      upgradePreiseDOM[i].style.color = "green";
    }
  }
}

function autosProSekunde() {
  AutoAnzahl += SekundenBonus;
  render();
}

function autoOriginal() {
  document.getElementById("Auto").height = "300";
}

function autoMittel() {
  document.getElementById("Auto").height = "302";
}

function autoGross() {
  document.getElementById("Auto").height = "350";
  document.getElementById("Auto").width = "350";
}

function autoClick() {
  AutoAnzahl = AutoAnzahl + bonus;
  render();
  autoGross();
}

function loopfirst() {
  autoOriginal();
  setTimeout(loopsecond, 200);
}

function loopsecond() {
  autoMittel();
  setTimeout(loopfirst, 200);
}
function pedal() {
  if (AutoAnzahl >= upgradePreise[Pedalpreis]) {
    UpgradeAnzahl[Pedalpreis]++;
    AutoAnzahl -= upgradePreise[Pedalpreis];
    bonus += 0.5;
    Inkrementationsinkrement[Pedalpreis] += 10;
    Inkremente[Pedalpreis] += Inkrementationsinkrement[Pedalpreis];
    upgradePreise[Pedalpreis] += Inkremente[Pedalpreis];
  }
  render();
}
function motor() {
  if (AutoAnzahl >= upgradePreise[Motorpreis]) {
    UpgradeAnzahl[Motorpreis]++;
    AutoAnzahl -= upgradePreise[Motorpreis];
    SekundenBonus += 0.1;
    Inkrementationsinkrement[Motorpreis] += 1.5;
    Inkremente[Motorpreis] += Inkrementationsinkrement[Motorpreis];
    upgradePreise[Motorpreis] += Inkremente[Motorpreis];
  }
  render();
}
setInterval(autosProSekunde, 1000);
loopfirst();
