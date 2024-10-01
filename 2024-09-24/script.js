let a = 1;
function Times() {
  switch (a) {
    case 1:
      document.getElementById("ul").style.fontWeight = "default";
      document.getElementById("ul").style.fontFamily = "Times New Roman";
      document.getElementById("ul").style.webkitTextStroke = "0px black";
      a = a + 1;
      break;
    case 2:
      document.getElementById("ul").style.fontFamily = "monospace";
      document.getElementById("ul").style.webkitTextStroke = "1px black";
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
const Font = document.getElementById("Krass");
Font.addEventListener("click", (button) => {
  Times();
});
