let AutoAnzahl = 0;
let bonus = 1;

function autoClick() {
  AutoAnzahl = AutoAnzahl + bonus;
  document.getElementById("Autos").innerHTML = "Autos: " + AutoAnzahl;
}
function AutobounceUp() {
  document.getElementById("bild").innerHTML =
    '<img width="300" height="300" src="car-svgrepo-com.svg" alt="Auto" />';
  setTimeout(AutobounceDown, 200);
}
function AutobounceDown() {
  document.getElementById("bild").innerHTML =
    '<img width="300" height="303" src="car-svgrepo-com.svg" alt="Auto" />';

  setTimeout(AutobounceUp, 200);
}
AutobounceUp();
