// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Calculate Inputs
  LetterGrade(
    document.getElementById("CS").value,
    (document.getElementById("output").innerHTML = msg)
  );
  LetterGrade(document.getElementById("SP1").value);
  LetterGrade(document.getElementById("SP2").value);
  LetterGrade(document.getElementById("CS2").value);
  LetterGrade(document.getElementById("ProjectA").value);
}

function LetterGrade(x, y, z) {
  if (x >= 0 && x <= 49) {
    console.log("F");
    document.getElementById(y);
    let msg = "F";
  } else if (x >= 50 && x <= 59) {
    console.log("D");
  } else if (x >= 60 && x <= 74) {
    console.log("C");
  } else if (x >= 75 && x <= 89) {
    console.log("B");
  } else if (x >= 90 && x == 100) {
    console.log("A");
  }
}
