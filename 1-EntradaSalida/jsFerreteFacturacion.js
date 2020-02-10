/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto1;
	var producto2;
	var producto3;
	var resultado;

	producto1=document.getElementById('PrecioUno').value;
	producto1=parseInt(producto1);
	producto2=document.getElementById('PrecioDos').value;
	producto2=parseInt(producto2);
	producto3=document.getElementById('PrecioTres').value;
	producto3=parseInt(producto3);

	resultado=producto1+producto2+producto3;

	alert("La suma de los productos es: "+resultado);
	console.log(resultado);


	
}

function Promedio () 
{
	var producto1;
	var producto2;
	var producto3;
	var sumaDeProductos;
	var resultado;

	producto1=document.getElementById('PrecioUno').value;
	producto1=parseInt(producto1);
	producto2=document.getElementById('PrecioDos').value;
	producto2=parseInt(producto2);
	producto3=document.getElementById('PrecioTres').value;
	producto3=parseInt(producto3);

	sumaDeProductos=producto1+producto2+producto3;
	resultado=sumaDeProductos/3;

	alert("El promedio de los productos es: "+resultado);
	console.log(resultado);
	
}
function PrecioFinal () 
{
	var producto1;
	var producto2;
	var producto3;
	var sumaDeProductos
	var iva;
	var resultado;

	producto1=document.getElementById('PrecioUno').value;
	producto1=parseInt(producto1);
	producto2=document.getElementById('PrecioDos').value;
	producto2=parseInt(producto2);
	producto3=document.getElementById('PrecioTres').value;
	producto3=parseInt(producto3);

	sumaDeProductos=producto1+producto2+producto3;
	iva=21/100;

	resultado=sumaDeProductos*iva+sumaDeProductos;

	alert("El precio final de los productos es: "+resultado);
	console.log(resultado);
	
}