// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

// Get Letter Grade:
function btnClicked() {
  let msg1 = getMathLetter("CS");
}

function getMathLetter(input) {
  let element = document.getElementById(input);
  let msg = "";
  if (element.value > 5) {
    msg = "F";
    console.log(msg);
  }
}
