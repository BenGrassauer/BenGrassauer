const upgradePreiseDOM = document.getElementsByClassName("upgradePreis");
const UpgradeAnzahlDOM = document.getElementsByClassName("upgradeMenge");
let loopsecondid;
let loopfirstid;
let achievflag1 = true;
let achievflag2 = true;
let cps = 0;
let cpsflag = true;
let Speicherobj = {};
addEventListener("beforeunload", () => {
  localStorage.setItem("Speicherobj", JSON.stringify(Speicherobj));
});

function render() {
  document.getElementById("Autos").innerHTML =
    "Autos: " + Math.floor(Speicherobj.AutoAnzahl * 10) / 10;
  document.getElementById("SekundenBonus").innerHTML =
    Math.floor(Speicherobj.SekundenBonus * 10) / 10 + " Autos/Sekunde";
  if (Speicherobj.bonus > 1) {
    document.getElementById("bonus").innerHTML =
      Speicherobj.bonus + " Autos/click";
  }
  for (let i = 0; i < upgradePreiseDOM.length; i++) {
    upgradePreiseDOM[i].innerHTML = Speicherobj.upgradePreise[i] + " Autos";
    UpgradeAnzahlDOM[i].innerHTML = Speicherobj.UpgradeAnzahl[i];
    if (Speicherobj.upgradePreise[i] > Speicherobj.AutoAnzahl) {
      upgradePreiseDOM[i].style.color = "red";
    } else {
      upgradePreiseDOM[i].style.color = "green";
    }
  }
  if (Speicherobj.AutoAnzahl > 1000 && achievflag1) {
    alert("DU HAST 1000 COOKIES ERREICHT!!! DU BIS ECHT HART!!!");
    achievflag1 = false;
  }
  if (Speicherobj.UpgradeAnzahl[3] == 10 && achievflag2) {
    alert(
      "DU HAST ALLES GESCHAFFT!!! WARTE AUF DAS NÄCHSTE UPDATE FÜR LENKRÄDER!!!"
    );
    achievflag2 = false;
  }
}

if (JSON.parse(localStorage.Speicherobj).AutoAnzahl == undefined) {
  Speicherobj = {
    AutoAnzahl: 0,
    UpgradeAnzahl: [0, 0, 0, 0],
    bonus: 1,
    SekundenBonus: 0,
    upgradePreise: [20, 200, 10, 1000],
    Inkremente: [2, 20, 30, 1000],
  };
} else {
  Speicherobj = JSON.parse(localStorage.getItem("Speicherobj"));
  render();
}
function autosProSekunde() {
  Speicherobj.AutoAnzahl += Speicherobj.SekundenBonus;
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
  Speicherobj.AutoAnzahl += Speicherobj.bonus;
  cps++;
  if (cpsflag) {
    cpsflag = false;
    setTimeout(() => {
      document.getElementById("cps").innerHTML =
        "aps: " + cps * Speicherobj.bonus;
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
  if (Speicherobj.AutoAnzahl >= Speicherobj.upgradePreise[index]) {
    Speicherobj.UpgradeAnzahl[index]++;
    Speicherobj.AutoAnzahl -= Speicherobj.upgradePreise[index];
    if (click) {
      if (bonuszusatz == false) {
        Speicherobj.SekundenBonus *= 2;
      } else {
        Speicherobj.bonus += bonuszusatz;
      }
    } else {
      Speicherobj.SekundenBonus += bonuszusatz;
    }
    Speicherobj.Inkremente[index] += inkrementationszusatz;
    Speicherobj.upgradePreise[index] +=
      Math.round(Speicherobj.Inkremente[index] * 10) / 10;
  }
  render();
}
setInterval(autosProSekunde, 1000);
loopfirst();
