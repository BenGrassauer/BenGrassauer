let a = 1;
function font() {
  switch (a) {
    case 1: //als erstes wird der font geändert und Einstellungen von späteren Zeilen zurückgesetzt
      document.getElementById("ul").style.fontWeight = "500";
      document.getElementById("ul").style.fontFamily = "Times New Roman";
      document.getElementById("ul").style.webkitTextStroke = "0px black";
      a = a + 1; //Die Variable 'a' ist ein Platzhalter für einen Zähler. Sie wir addiert oder subtrahiert um den case zu ändern
      break;
    case 2:
      document.getElementById("ul").style.fontFamily = "monospace";
      // document.getElementById("ul").style.webkitTextStroke = "1px black";
      a = a + 1;
      break;
    case 3:
      document.getElementById("ul").style.fontWeight = "900";
      document.getElementById("ul").style.webkitTextStroke = "2px cyan";
      a = a - 2;
    default:
      break;
  }
}
function linux() {
  //nach dem Eventlistener wird das Bild geändert
  document.getElementById("Bild").innerHTML =
    "<img id='großesBild'class='großeBilder'src='image.png' alt='So ein Opfer laesst sich nicht mehr bearbeiten'/>";
}
function firefox() {
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    //hier wird nach einem Spezifeschem Index gecheckt, der bei jedem browser -1 außer wenn er einen spezifeschen Firefox string enthält
    return "Sie Nutzen Firefox";
  } else return "Sie nutzen kein Firefox";
}
function firefoxschreiben() {
  document.getElementById("Operaodernicht").innerHTML = firefox();
}

//hier wird das Ergebnis ins HTML geschrieben
const coolio = document.getElementById("großesBild"); //hier werden Variablen für spätere Benutzung definiert
const fontconst = document.getElementById("Krass");

fontconst.addEventListener("click", (button) => {
  //eventlistener, die Funktionen auslösen
  font();
});
coolio.addEventListener("mouseover", () => {
  linux();
});
document.getElementById("firefox").addEventListener("click", () => {
  firefoxschreiben();
});
