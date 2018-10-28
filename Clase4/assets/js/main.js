window.onload = function() {
    var titulo = document.getElementById("titular");
    titulo.parentNode.removeChild(titulo);

    var lechuza = document.getElementById("lechuza");
    lechuza.style.filter = "grayscale(100%)";


    var inputs =document.getElementsByTagName("input");

    for (index = 0; index < inputs.length; ++index) {
  inputs[index].style.background = "red";




  //1.

}
var cp = document.getElementById("copyright");
console.log(cp.attributes);

//2.
console.log(document.querySelector(".fa-twitter").getAttribute("href"));
//3.
console.log(document.querySelector(".fa-facebook").getAttribute("href"));

//4.
document.querySelector(".fa-youtube").setAttribute("href","https://youtube.com");
//5.
var inputs =document.getElementsByTagName("form");
console.log(inputs[0].getAttribute("url"));

//6.

inputs[0].action=inputs[0].getAttribute("url");
console.log(inputs[0].action);
//7.

  var h2 =document.getElementsByTagName("h2");
  h2[0].style.color ="red";

//8

var icons = document.querySelectorAll(".icon");
console.log(icons );
for (var i = 0; i < icons.length; i++) {
  icons[0].style.color="blue";
}

}
