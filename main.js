// CS20 Grade Calculator by Bofan Zhang

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

// Get Letter Grade:
function btnClicked() {
  // Calculate Client Side Scripting Grade (Part 1)
  let msg1 = getMathLetter("CS");
  Output("output").innerHTML = msg1;
  // Calculate Structured Programing Grade (Part 1)
  let msg2 = getMathLetter("SP1");
  Output("output1").innerHTML = msg2;
  // Calculate Structured Programing Grade (Part 2)
  let msg3 = getMathLetter("SP2");
  Output("output2").innerHTML = msg3;
  // Calculate Client Side Scripting Grade (Part 2)
  let msg4 = getMathLetter("CS2");
  Output("output3").innerHTML = msg4;
  // Calculate Project Grade
  let msg5 = getMathLetter("ProjectA");
  Output("output4").innerHTML = msg5;

  // Calculate Final Percentage
  let AverageNumber =
    (+document.getElementById("CS").value +
      +document.getElementById("CS2").value +
      +document.getElementById("SP1").value +
      +document.getElementById("SP2").value +
      +document.getElementById("ProjectA").value) /
    5;
  let msg6 = AverageNum(AverageNumber);
  Output("output6").innerHTML = msg6;
  Output("output5").innerHTML = AverageNumber + "%";
  // Calculate Final Letter Grade
}

// Calculate Letter Grade By User Input
function getMathLetter(input) {
  let element = document.getElementById(input);

  if (element.value <= 49) {
    return "F";
  } else if (element.value >= 50 && element.value <= 59) {
    return "D";
  } else if (element.value >= 60 && element.value <= 74) {
    return "C";
  } else if (element.value >= 75 && element.value <= 89) {
    return "B";
  } else {
    return "A";
  }
}

function AverageNum(input) {
  let AverageNum = input;

  if (AverageNum <= 49) {
    return "F";
  } else if (AverageNum >= 50 && AverageNum <= 59) {
    return "D";
  } else if (AverageNum >= 60 && AverageNum <= 74) {
    return "C";
  } else if (AverageNum >= 75 && AverageNum <= 89) {
    return "B";
  } else {
    return "A";
  }
}

function Output(output) {
  let msg = document.getElementById(output);
  return msg;
}
