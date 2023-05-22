// Define the result display element
var resultDisplay = document.getElementById("result");

// Clear the result display
function clearScreen() {
  resultDisplay.value = "";
}

// Update the result display with the clicked button value
function display(value) {
  resultDisplay.value += value;
}

// Calculate the result and update the display
function calculate() {
  var expression = resultDisplay.value;

  // Replace the symbols with their respective operators
  expression = expression.replace(/×/g, '*').replace(/÷/g, '/');

  // Handle division by zero
  if (expression.includes('/0')) {
    resultDisplay.value = "Infinity";
    return;
  }

  try {
    // Evaluate the expression and round the result to 8 decimal places
    var result = eval(expression).toFixed(2);
    resultDisplay.value = result;
  } catch (error) {
    // Display an error message if the expression is invalid
    resultDisplay.value = "Error: Invalid expression";
  }
}

// Add event listeners to the calculator buttons
var calcButtons = document.querySelectorAll(".calculator button");
calcButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var buttonValue = this.value;

    // Handle the different button types
    if (buttonValue === "C") {
      clearScreen();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      display(buttonValue);
    }
  });
});