function liste() {
  document.getElementById("tbl").innerHTML +=
    "<tr><td style='border: solid;'>" +
    document.getElementById("blumen").options[
      document.getElementById("blumen").selectedIndex
    ].text +
    "</td><td style='border: solid;'>" +
    preis.innerHTML +
    "</td></tr>";
  document.getElementById("summe").innerHTML =
    Number(document.getElementById("summe").innerHTML) +
    parseFloat(blumen.value);
}
function bestellung() {
  if (
    document.getElementById("tbl").innerHTML ===
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
