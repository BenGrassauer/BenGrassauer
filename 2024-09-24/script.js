function Times() {
  if (a == 1) {
    document.getElementById("ul").style.fontFamily = "Times New Roman";
    document.getElementById("ul").style.webkitTextStroke = "0px black";
    a = a - 1;
  } else {
    document.getElementById("ul").style.fontFamily = "monospace";
    document.getElementById("ul").style.webkitTextStroke = "1px lightcyan";
    a = a + 1;
  }
}

const Font = document.getElementById("Krass");
Font.addEventListener("click", (button) => {
  Times();
});
let a = 1;
