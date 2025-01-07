function required() {
  if (document.getElementById("name").value.length <= 0) {
    alert("Sie müssen einen Benutzernamen eingeben");
  } else {
    if (document.getElementById("name").value.length < 5) {
      alert("Das Namensfeld muss mindestenes 5 Zeichen enthalten");
    } else {
      if (
        document
          .getElementById("email")
          .value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) == null
      ) {
        alert('Ihre email muss das Format "beispiel@domain.com" beibehalten');
      } else {
        if (document.getElementById("drp").value == 1) {
          alert("Sie müssen eine der Optionen auswählen");
        } else {
          if (document.getElementById("check").checked == false) {
            alert("Sie müssen unsere Nutzungsbedingungen akzeptieren");
          } else {
            alert(
              `Sie ${document.getElementById("name").value} haben sich für ${
                document.getElementById("drp").value
              } angemeldet. Vielen Dank!`
            );
          }
        }
      }
    }
  }
}
