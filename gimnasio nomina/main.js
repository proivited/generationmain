alert('Listo para pelear');
var numuno = parseInt(prompt('Ingresa tu salario diario en PMX:'));

var resultado1 = (numuno * .30);
var resultado2 = (resultado1 * 15);
var resultado3 = (resultado1 * 30);
var resultado4 = (numuno * .10);
var resultado5 = (resultado4 * 15);
var resultado6 = (resultado4 * 30)
var resultado7 = (numuno * 15);
var resultado8 = (numuno * 30);
alert('Descuentos totales son:');
alert('Descuento ISR quincena=' + resultado2 + 'mensual=' + resultado3);
alert('Descuento IMSS quincena=' + resultado5 + 'mensual=' + resultado6);
alert('Sueldo quincenal=' + (resultado7 - resultado2 - resultado5));
alert('Sueldo mensual=' + (resultado8 - resultado3 - resultado6));