// CS20 Grade Calculator by Bofan Zhang

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

// Get Letter Grade:
function btnClicked() {
  // Calculate Client Side Scripting Grade (Part 1)
  let msg1 = getMathLetter("CS");
  document.getElementById("output").innerHTML = msg1;
  // Calculate Structured Programing Grade (Part 1)
  let msg2 = getMathLetter("SP1");
  document.getElementById("output1").innerHTML = msg2;
  // Calculate Structured Programing Grade (Part 2)
  let msg3 = getMathLetter("SP2");
  document.getElementById("output2").innerHTML = msg3;
  // Calculate Client Side Scripting Grade (Part 2)
  let msg4 = getMathLetter("CS2");
  document.getElementById("output3").innerHTML = msg4;
  // Calculate Project Grade
  let msg5 = getMathLetter("ProjectA");
  document.getElementById("output4").innerHTML = msg5;

  // Calculate Final Percentage
  let AverageNum = calculateFinalPercent("CS", "SP1", "SP2", "CS2", "ProjectA");
  document.getElementById("output5").innerHTML = AverageNum + "%";

  // Calculate Final Letter Grade
  let AverageLet = calculateFinalLet("CS", "SP1", "SP2", "CS2", "ProjectA");
  document.getElementById("output6").innerHTML = AverageLet;
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
  } else if (element.value >= 90) {
    return "A";
  }
}

// Calculate Total Average Letter Grade by User Input
function calculateFinalLet(input, input1, input2, input3, input4) {
  let total = Math.round(
    (+document.getElementById(input).value +
      +document.getElementById(input1).value +
      +document.getElementById(input2).value +
      +document.getElementById(input3).value +
      +document.getElementById(input4).value) /
      5
  );
  if (total <= 49) {
    return "F";
  } else if (total >= 50 && total <= 59) {
    return "D";
  } else if (total >= 60 && total <= 74) {
    return "C";
  } else if (total >= 75 && total <= 89) {
    return "B";
  } else if (total >= 90) {
    return "A";
  }
}

// Calculate Total Average Number by User Input
function calculateFinalPercent(input, input1, input2, input3, input4) {
  let total = Math.round(
    (+document.getElementById(input).value +
      +document.getElementById(input1).value +
      +document.getElementById(input2).value +
      +document.getElementById(input3).value +
      +document.getElementById(input4).value) /
      5
  );
  return total;
}
