let a = 1;
function font() {
  switch (a) {
    case 1:
      document.getElementById("ul").style.fontWeight = "500";
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
function linux() {
  document.getElementById("Bild").innerHTML =
    "<img id='großesBild'class='großeBilder'src='image.png' alt='So ein Opfer laesst sich nicht mehr bearbeiten'/>";
}
function opera() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return "Sie Nutzen Opera";
  } else return "Sie nutzen kein Opera";
}
document.getElementById("Operaodernicht").innerHTML = opera();
const coolio = document.getElementById("großesBild");
const fontconst = document.getElementById("Krass");

fontconst.addEventListener("click", (button) => {
  font();
});
coolio.addEventListener("mouseover", (button) => {
  linux();
});
