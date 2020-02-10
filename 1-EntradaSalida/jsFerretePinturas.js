/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var centígrados;
	var fahrenheit;

	fahrenheit=document.getElementById('Temperatura').value;
	fahrenheit=parseInt(fahrenheit);

	centrigrados=(fahrenheit-32)/1.8;
	
	document.getElementById('Temperatura').value=centrigrados;
	
}

function CentigradosFahrenheit () 
{
	var centígrados;
	var fahrenheit;

	fahrenheit=document.getElementById('Temperatura').value;
	fahrenheit=parseInt(fahrenheit);

	centrigrados=fahrenheit*1.8+32;
	
	document.getElementById('Temperatura').value=centrigrados;
	
}
