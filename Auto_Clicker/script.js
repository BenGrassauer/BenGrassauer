let loopsecondid;
let loopfirstid;
let AutoAnzahl = 0;
let UpgradeAnzahl = [0, 0, 0, 0];
let Pedalanzahl = 0;
let bonus = 1;
let SekundenBonus = 0;
let UpgradeAnzahlDOM = document.getElementsByClassName("upgradeMenge");
let upgradePreiseDOM = document.getElementsByClassName("upgradePreis");
let upgradePreise = [20, 200, 10, 1000];
let Inkremente = [2, 20, 30, 1000];
let cps = 0;
let cpsflag = true;

//function setup() {
//  for (let i = 0; i < UpgradeAnzahlDOM.length; i++) {
//    UpgradeAnzahl[i] = 0;
//  }
//}

function render() {
  document.getElementById("Autos").innerHTML =
    "Autos: " + Math.floor(AutoAnzahl * 10) / 10;
  document.getElementById("SekundenBonus").innerHTML =
    Math.floor(SekundenBonus * 10) / 10 + " Autos/Sekunde";
  if (bonus > 1) {
    document.getElementById("bonus").innerHTML = bonus + " Autos/click";
  }
  for (let i = 0; i < upgradePreiseDOM.length; i++) {
    upgradePreiseDOM[i].innerHTML = upgradePreise[i] + " Autos";
    UpgradeAnzahlDOM[i].innerHTML = UpgradeAnzahl[i];
    if (upgradePreise[i] > AutoAnzahl) {
      upgradePreiseDOM[i].style.color = "red";
    } else {
      upgradePreiseDOM[i].style.color = "green";
    }
  }
  if (AutoAnzahl > 1000) {
    alert("DU HAST 1000 COOKIES ERREICHT!!! DU BIS ECHT HART!!!");
  }
  if (UpgradeAnzahl[3] == 10) {
    alert(
      "DU HAST ALLES GESCHAFFT!!! WARTE AUF DAS NÄCHSTE UPDATE FÜR LENKRÄDER!!!"
    );
  }
}

function autosProSekunde() {
  AutoAnzahl += SekundenBonus;
  render();
}

function autoOriginal() {
  document.getElementById("Auto").height = "400";
}

function autoMittel() {
  document.getElementById("Auto").height = "420";
}

function autoGross() {
  clearTimeout(loopfirstid);
  clearTimeout(loopsecondid);
  document.getElementById("Auto").height = "500";
  document.getElementById("Auto").width = "500";
  setTimeout(loopfirst, 150);
}

function autoClick() {
  AutoAnzahl += bonus;
  cps++;
  if (cpsflag) {
    cpsflag = false;
    setTimeout(() => {
      document.getElementById("cps").innerHTML = "aps: " + cps * bonus;
      cps = 0;
      cpsflag = true;
    }, 1000);
  }
  render();
  autoGross();
}

function loopfirst() {
  autoOriginal();
  loopfirstid = setTimeout(loopsecond, 200); //startet eine Art bounce animation mit loopsecond()
}

function loopsecond() {
  autoMittel();
  loopsecondid = setTimeout(loopfirst, 200);
}
function upgrade(index, bonuszusatz, inkrementationszusatz, click) {
  if (AutoAnzahl >= upgradePreise[index]) {
    UpgradeAnzahl[index]++;
    AutoAnzahl -= upgradePreise[index];
    if (click) {
      if (bonuszusatz == false) {
        SekundenBonus *= 2;
      } else {
        bonus += bonuszusatz;
      }
    } else {
      SekundenBonus += bonuszusatz;
    }
    Inkremente[index] += inkrementationszusatz;
    upgradePreise[index] += Inkremente[index];
  }
  render();
}
setInterval(autosProSekunde, 1000);
loopfirst();
