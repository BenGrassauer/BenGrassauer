const summe = document.getElementById("summe");
let obj = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  anmerkung: document.getElementById("Anmerkung").value,
  warenkorb: [],
};
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
  obj.warenkorb.push({
    blume:
      document.getElementById("blumen").options[
        document.getElementById("blumen").selectedIndex
      ].text,
    preis: preis.innerHTML,
  });
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
    obj.name = document.getElementById("name").value;
    obj.email = document.getElementById("email").value;
    obj.anmerkung = document.getElementById("Anmerkung").value;
    alert(JSON.stringify(obj));
  }
}
document.getElementById("button").addEventListener("click", function () {
  liste();
});
