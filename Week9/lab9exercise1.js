var start;

function startTime()
{
start = new Date();

}

var stop;
function stopTime()
{
stop = new Date();


var time = (stop.getTime()-start.getTime())/1200; //I divided by 1200 not 600 because it seemed to give me a more accurate time.


alert ("You have been on this page for " + time + " seconds");
}

