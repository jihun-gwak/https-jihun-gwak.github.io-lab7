document.addEventListener("DOMContentLoaded", function () {
  /****************** create variables ******************/
  let modelName = "XYZ";
  let duration = 0;

  /****************** helper function ******************/
  function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = modelName === "XYZ" ? duration * 100 : duration * 213;
    costLabel.innerHTML = totalCost.toFixed(2); // Display total cost with two decimal places
  }

  /****************** model button logic ******************/
  let modelButton = document.getElementById("model-button");

  function changeModel() {
    let modelText = document.getElementById("model-text");
    if (modelName === "XYZ") {
      modelName = "CPRG";
      modelText.innerHTML = "Model CPRG";
    } else {
      modelName = "XYZ";
      modelText.innerHTML = "Model XYZ";
    }
    recalculate();
  }

  modelButton.addEventListener("click", changeModel);

  /****************** duration button logic ******************/
  let durationButton = document.getElementById("duration-button");

  function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter new duration:");

    // Check if the input is a valid number
    if (!isNaN(newDuration) && newDuration !== null) {
      duration = parseInt(newDuration);
      durationText.innerHTML = duration;
      recalculate();
    } else {
      alert("Invalid input. Please enter a valid number for duration.");
    }
  }

  durationButton.addEventListener("click", changeDuration);
});
