var atras = document.getElementById('atras');
atras.onclick = function() {
history.back();
};

var adelante = document.getElementById('adelante');
adelante.onclick = function() {
history.forward();
};

window.onload = function() {
//esto se ejecuta cuando la página carga
alert('JOder! Soy una alerta!');
var nombre = prompt('Pues que se le va a hacer... BUeno, cual es tu nombre?');
var conf = confirm('Hola '+nombre+'! Tu tambien eres una alerta?');

if(conf){
  window.location ='http://www.google.com';
}
};
console.log('esto es un archivo externo');
