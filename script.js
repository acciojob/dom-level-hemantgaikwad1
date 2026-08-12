//your JS code here. If required.
let target = document.getElementById("level");
alert(getDomLevel(target)); 
function getDomLevel(element) {
  let level = 0;
  while (element) {
    level++;
    element = element.parentElement; // move up one parent
  }
  return level;
}