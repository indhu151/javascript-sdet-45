document.getElementById("greetings").innerHTML="Hello Goodmorning"
document.getElementById("js").innerHTML="javascript started"
document.getElementById("clickbtn").onclick=clicked
function clicked(){
    document.getElementById("clickbtn").innerHTML="clicked"
}
document.getElementById("time").onclick=onClickTime
function onClickTime()
{
    document.getElementById("date").innerHTML=Date()
}