// Start Operator---------------------------------------
let operator;
function plusFocus() {
    operator = "+"
}
function minusFocus() {
    operator = "-"
}
function multiplyFocus() {
    operator = "*"
}
function divideFocus() {
    operator = "/"
}
// Ende Operator---------------------------------------

// Start Userinput---------------------------------------
function pullUserInput() {
    userInput1 = parseFloat(document.getElementById("userInput1").value);
    userInput2 = parseFloat(document.getElementById("userInput2").value);
    if ((userInput1 * 100000000000000) % 1 == 0 && (userInput2 * 100000000000000) % 1 == 0) {
        warning("")
        endResult("0")
    }
    else {
        warning("Geben sie beide zahlen ein.");
    }
    function warning(warningText) {
        let message = document.getElementById("inputNull");
        message.textContent = warningText;
    }
    function endResult(text) {
        let message = document.getElementById("calc-summArea");
        message.textContent = text;
    }
}
// Ende Userinput---------------------------------------

// Start Rechnungs Proces---------------------------------------
function pullOperator(userInput1, userInput2, operator) {
    if (operator === "+") {
        summ = userInput1 + userInput2;
        endResult(userInput1 + " + " + userInput2 + " = " + (userInput1 + userInput2));
    }
    else if (operator === "-") {
        summ = userInput1 - userInput2;
        endResult(userInput1 + " - " + userInput2 + " = " + (userInput1 - userInput2));
    }
    else if (operator === "*") {
        summ = userInput1 * userInput2;
        endResult(userInput1 + " * " + userInput2 + " = " + (userInput1 * userInput2));
    }
    else if (operator === "/") {
        summ = userInput1 / userInput2;
        endResult(userInput1 + " / " + userInput2 + " = " + (userInput1 / userInput2));
    }
    else {
        warning(" Wählen Sie bitte eine Funktion aus. ");
        endResult("0");
    }


    // Start Rezultat---------------------------------------
    function endResult(text) {
        let message = document.getElementById("calc-summArea");
        message.textContent = text;
    }
    // Ende Rezultat---------------------------------------

    // Start No Operator / Input Warning---------------------------------------
    function warning(warningText) {
        let message = document.getElementById("inputNull");
        message.textContent = warningText;
    }
    // Ende No Operator / Input Warning---------------------------------------


}
// Ende Rechnungs Proces---------------------------------------

// Start Reset Button---------------------------------------
text = 0;
userInput1 = 0;
userInput2 = 0;
function hardReset(text) {
    let message = document.getElementById("calc-summArea");
    message.textContent = text;
    let message1 = document.getElementById("userInput1");
    message1.value = '';
    let message2 = document.getElementById("userInput2");
    message2.value = '';
    operator = "";
}
// Ende Reset Button---------------------------------------
