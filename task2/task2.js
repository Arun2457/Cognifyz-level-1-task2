var a =new Date();
var hour = a.getHours();

if (hour >= 0 && hour < 12) {
    window.alert("Good Morning");
} 
if (hour >= 12 && hour < 15) {
    window.alert("Good Afternoon");
} 
if (hour >= 15 && hour < 19) {
    window.alert("Good Evening");
}
if (hour >= 19 && hour < 24){
    window.alert("Good Night");
}

function multicolor(){
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    return "rgb("+r+","+g+","+b+")";
}

function change(){
    var btn=document.getElementById("btn")
    btn.style.backgroundColor=multicolor();
}
function add(){
    var a= document.getElementById("input1")
    var b= document.getElementById("input2")
    var c=document.getElementById("demo")
    var input1=Number(a.value)
    var input2=Number(b.value)
    var Total=input1+input2
    c.textContent="Your Answer :"+ Total

}
