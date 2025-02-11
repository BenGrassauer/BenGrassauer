let zahl = 0;
let farben = [
  "red",
  "white",
  "orange",
  "purple",
  "green",
  "yellow",
  "darkgrey",
  "fuchsia",
  "darkgreen",
  "darkslateblue",
];
let id = 0;
let anzahl = 1;
function vervielFachung() {
  for (let i = 0; i < anzahl; i++) {
    id++;
    document.getElementById("div").innerHTML =
      document.getElementById("div").innerHTML +
      `<button id="${id}" style="background-color: ${
        farben[Math.floor(Math.random() * 10)]
      }" onclick="vervielFachung()">
        BUTTON
      </button>`;
  }
  anzahl = anzahl * 2;
  document.getElementById("anzahl").innerHTML = anzahl + " Buttons";
}

function verschwindung() {
  zahl = Number(document.getElementById("text").value);
  for (let i = 0; i < zahl; i++) {
    document.getElementById(id).remove();
    id--;
  }
  anzahl = anzahl - zahl;
  document.getElementById("anzahl").innerHTML = anzahl + " Buttons";
}
