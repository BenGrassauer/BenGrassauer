function automat() {
  let eingabe = Number(document.getElementById("Eingabe").value);
  let textausgabe = "";
  switch (eingabe) {
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
        textausgabe = `Sie haben €${eingabe} abgehoben`;
      } else textausgabe = "Geben Sie einen gültigen Betrag ein";
      break;
  }
  document.getElementById("Ausgabe").innerHTML = textausgabe;
}
document.getElementById("Auslöser").addEventListener("click", () => {
  automat();
});
