const summe = document.getElementById("summe");

function liste() {
  document.getElementById("Korb").innerHTML +=
    "<tr><td style='border: solid;'>" +
    document.getElementById("blumen").options[
      document.getElementById("blumen").selectedIndex
    ].text +
    "</td><td style='border: solid;'>" +
    preis.innerHTML +
    "</td></tr>";
  x =
    parseFloat(summe.innerHTML.replace("Gesamtsumme: ", "").trim()) +
    parseFloat(blumen.value);
  summe.innerHTML = "Gesamtsumme: " + x + "€";
}

function bestellung() {
  if (
    document.getElementById("Korb").innerHTML ===
    `
        <tbody><tr>
            <th style="border: solid;">Produkte
            </th><th style="border: solid;">Preis
        </th></tr>
    </tbody>`
  ) {
    alert("Sie müssen etwas in den Warenkorb legen");
  } else {
    alert("Ihre Blumen wurden bestellt");
  }
}
document.getElementById("button").addEventListener("click", function () {
  liste();
});
