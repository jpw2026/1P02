var age = Number(prompt("What is your age", "Age"));

var todayDate = new Date();

var yearBorn = todayDate.getFullYear() - age;

    function Year()
    {
        if (age != null){
  document.getElementById("year").innerHTML =  yearBorn;}
}
