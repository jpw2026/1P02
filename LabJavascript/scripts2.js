//Sets the initial colours of the three elements on page load
function start(){
document.getElementById("bluey").style.color="blue";
document.getElementById("greeny").style.color="green";
document.getElementById("redy").style.color="red";
}

//A function to change colours of elements when called
function mix(){
	
	var first = "#00BB00";
	var second = "BB9320";
	var third = "#AB00FF";
	
	document.getElementById("bluey").style.color= first;
	document.getElementById("greeny").style.color= second;
	document.getElementById("redy").style.color= third;
	
}