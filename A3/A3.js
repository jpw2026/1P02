

var todayDate = new Date();


function clocki(){
alert("There is nothing on this page or relevant to your assignment, the pages that have something are home, history, sites, and quiz");
document.getElementById("times").innerHTML = todayDate;
}



function clocka(){

document.getElementById("times").innerHTML = todayDate;

alert("Only Russians and Brock Professors Allowed", "Are You a Russian or a Brock Teacher? y or n");

if (yon == y)
{

}else{
window.location.replace("SecondaryPages/A3TA.html");
}


}


function clocky(){

document.getElementById("times").innerHTML = todayDate;



}





var questionOne = 0; 
var questionTwo = 0;
var questionThree = 0;
var questionFour = 0;
var questionFive = 0;



function quesOneSet(choice)
{

questionOne = choice;

if(choice == 1)
{
document.getElementById("choiceOne").innerHTML = "a";
} else if(choice == 2)
{
document.getElementById("choiceOne").innerHTML = "b";
}
else if(choice == 3)
{
document.getElementById("choiceOne").innerHTML = "c";
}else if(choice == 4)
{
document.getElementById("choiceOne").innerHTML = "d";
}


}

function quesTwoSet(choice)
{
questionTwo = choice;

if(choice == 1)
{
document.getElementById("choiceTwo").innerHTML = "a";
} else if(choice == 2)
{
document.getElementById("choiceTwo").innerHTML = "b";
}
else if(choice == 3)
{
document.getElementById("choiceTwo").innerHTML = "c";
}else if(choice == 4)
{
document.getElementById("choiceTwo").innerHTML = "d";
}

}


function quesThreeSet(choice)
{
questionThree = choice;

if(choice == 1)
{
document.getElementById("choiceThree").innerHTML = "a";
} else if(choice == 2)
{
document.getElementById("choiceThree").innerHTML = "b";
}
else if(choice == 3)
{
document.getElementById("choiceThree").innerHTML = "c";
}else if(choice == 4)
{
document.getElementById("choiceThree").innerHTML = "d";
}


}


function quesFourSet(choice)
{
questionFour = choice;

if(choice == 1)
{
document.getElementById("choiceFour").innerHTML = "a";
} else if(choice == 2)
{
document.getElementById("choiceFour").innerHTML = "b";
}
else if(choice == 3)
{
document.getElementById("choiceFour").innerHTML = "c";
}else if(choice == 4)
{
document.getElementById("choiceFour").innerHTML = "d";
}

}


function quesFiveSet(choice)
{
questionFive = choice;

if(choice == 1)
{
document.getElementById("choiceFive").innerHTML = "a";
} else if(choice == 2)
{
document.getElementById("choiceFive").innerHTML = "b";
}
else if(choice == 3)
{
document.getElementById("choiceFive").innerHTML = "c";
}else if(choice == 4)
{
document.getElementById("choiceFive").innerHTML = "d";
}


}



function check()
{
if (questionOne == "1")
{
document.getElementById("resultOne").innerHTML = "correct";
}else
{
document.getElementById("resultOne").innerHTML = "incorrect";
}




if (questionTwo == "2")
{
document.getElementById("resultTwo").innerHTML = "correct";
}else
{
document.getElementById("resultTwo").innerHTML = "incorrect";
}


if (questionThree == "3")
{
document.getElementById("resultThree").innerHTML = "correct";
}else
{
document.getElementById("resultThree").innerHTML = "incorrect";
}

if (questionFour == "4")
{
document.getElementById("resultFour").innerHTML = "correct";
}else
{
document.getElementById("resultFour").innerHTML = "incorrect";
}

if (questionFive == "1")
{
document.getElementById("resultFive").innerHTML = "correct";
}else
{
document.getElementById("resultFive").innerHTML = "incorrect";
}

}




