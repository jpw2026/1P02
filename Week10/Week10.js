

function addNumbers(){
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var sum = num1 + num2;
    document.getElementById("sum").innerHTML= sum;


}

function subtractNumbers(){
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var sum = num1 - num2;
    document.getElementById("sum").innerHTML= sum;


}

function multiplyNumbers(){
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var sum = num1 * num2;
    document.getElementById("sum").innerHTML= sum;


}

function divideNumbers(){
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var sum = num1 / num2;
    document.getElementById("sum").innerHTML= sum;


}