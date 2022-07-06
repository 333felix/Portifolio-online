function openNav(){

var x = document.getElementById("navigation");

if(x.className === "navigation"){
    x.className += "  menujs";
document.getElementById("responsivo").innerHTML = "&Cross;";

}else{

x.className = "navigation"
document.getElementById("responsivo").innerHTML = "&#9776;";

}

}