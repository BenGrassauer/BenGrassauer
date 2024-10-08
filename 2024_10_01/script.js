function automat() {
  let eingabe = Number(document.getElementById("Eingabe").value); //hier wird der String in eine integer umgewandelt
  let textausgabe = "";
  switch (
    eingabe //das switch nimmt den Wert der Variable Eingabe
  ) {
    case 1:
      textausgabe = "Sie haben €100 abgehoben";
      break;
    case 2:
      textausgabe = "Sie haben €200 abgehoben";
      break;
    case 3:
      textausgabe = "Sie haben €300 abgehoben";
      break;
    default:
      if (eingabe % 10 === 0 && eingabe <= 400) {
        // hier wird sicher gegangen, dass man den Betrag nur in 10er Schritten abheben kann
        textausgabe = `Sie haben €${eingabe} abgehoben`;
      } else textausgabe = "Geben Sie einen gültigen Betrag ein";
      break;
  }
  document.getElementById("Ausgabe").innerHTML = textausgabe;
}
document.getElementById("Auslöser").addEventListener("click", () => {
  automat();
});
