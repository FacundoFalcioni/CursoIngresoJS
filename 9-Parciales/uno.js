
function mostrar()
{
	var anchoDelRectangulo;
	var largoDelRectangulo;
	var resultado;

	anchoDelRectangulo=prompt("Ingrese el ancho del rectangulo");
	anchoDelRectangulo=parseInt(anchoDelRectangulo);
	largoDelRectangulo=prompt("Ingrese el largo del rectangulo");
	largoDelRectangulo=parseInt(largoDelRectangulo);

	resultado=2*(anchoDelRectangulo+largoDelRectangulo);

	alert("El perimetro del rectangulo es: "+resultado);
	
}
