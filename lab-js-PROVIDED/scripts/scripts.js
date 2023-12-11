/****************** YOUR NAME: jihun gwak.

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration = OK */

// INSERT YOUR CODE HERE

let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will  = OK
    - create a variable to represent the calculated-cost span element. That will look something like: = OK
        // let costLabel = document.getElementById("calculated-cost"); = OK
    - check the value of the modelName variable, and use that to calculate the new total cost: = OK
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost. = OK
        if modelName is currently "CPRG", duration * 213 gives us the new total cost. = OK
    - set the value of the calculated-cost element's innerHTML to this new value = OK
*/

// INSERT YOUR CODE HERE

function recalculate() {
  let costLabel =
    document.getElementById(
      "calculated-cost"
    ); /* Acessing Elements by ID - Slide 4 */
  let newTotalCost = modelName === "XYZ" ? duration * 100 : duration * 213;
  costLabel.innerHTML = newTotalCost;
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById) = OK
- second, create a function called changeModel() which checks the value of the model name variable. This function will: = OK
    - create a variable to represent the model-text span element = OK
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG" = OK
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ" = OK
    - then, recalculate() the total cost. = OK
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
// modelButton.addEventListener("click", changeModel); = OK

// INSERT YOUR CODE HERE

let modelButton =
  document.getElementById(
    "model-button"
  ); /* Acessing Elements by ID - Slide 4 */
let modelText =
  document.getElementById("model-text"); /* Acessing Elements by ID - Slide 4 */

function changeModel() {
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
/*  - first, create a variable to represent the "Change Duration" pseudo-button. = OK
    - then, create a function called changeDuration() that will = OK
        - create a variable to represent the duration-text span element = OK
        - prompt() the user for a new duration = OK
        - save the result of the prompt() to the duration variable = OK
        - change the innerHTML of the duration-text span element to this new value = OK
        - recalculate() the total cost/ = OK
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked. = OK
*/

// INSERT YOUR CODE HERE

let durationButton =
  document.getElementById(
    "duration-button"
  ); /* Acessing Elements by ID - Slide 4 */
let durationText =
  document.getElementById(
    "duration-text"
  ); /* Acessing Elements by ID - Slide 4 */

function changeDuration() {
  let newDuration = prompt("How many days?"); /* Prompt Box - Slide 31 */
  duration =
    parseInt(newDuration) ||
    0; /*W3 School = this method parses a value as a string and returns the first integer*/
  durationText.innerHTML = duration; /* Modifying Element Content - Slide 8 */
  recalculate();
}

durationButton.addEventListener("click", changeDuration);
