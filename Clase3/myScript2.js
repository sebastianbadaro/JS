do {
  var primero = prompt('Elegir un numero');
  var segundo = prompt('Elegir otro numero');
  var confirmation = confirm('Comparar '+primero+' y '+segundo+'?')
} while (!confirmation);
primero>segundo ? alert(primero+' es mayor que '+segundo) : alert(segundo+' es mayor que '+primero);
