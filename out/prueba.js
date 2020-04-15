"use strict";

var prueba = "ejemplo";

function objetoXHR() {
	if (window.XMLHttpRequest) {
		// El navegador implementa la interfaz XHR de forma nativa
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// El navegador no implementa la interfaz XHR de forma nativa
		// Por ejemplo: Internet explorer.
		var versionesIE = new Array("MsXML2.XMLHTTP.5.0", "MsXML2.XMLHTTP.4.0", "MsXML2.XMLHTTP.3.0", "MsXML2.XMLHTTP", "Microsoft.XMLHTTP");
		for (var i = 0; i < versionesIE.length; i++) {
			try {
				/* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

				return new ActiveXObject(versionesIE[i]);
			} catch (errorControlado) {
				console.log(errorControlado);
			} //Capturamos el error,
		}
	}
	/* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
	throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function realizarPeticionAsincronaMYSQL() {

	var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = "";
	var miXHR = new objetoXHR();
	miXHR.open("GET", "servidor/datosMYSQL.php", true);
	miXHR.onreadystatechange = comprobarEstadoPeticion;
	miXHR.send(null);
}

function realizarPeticionAsincronaPDO() {
	var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = "";
	var miXHR = new objetoXHR();
	miXHR.open("GET", "servidor/datosPDO.php", true);
	miXHR.onreadystatechange = comprobarEstadoPeticion;
	miXHR.send(null);
}

function comprobarEstadoPeticion() {
	switch (this.readyState) {
		case 4:
			if (this.status == 200) {
				crearTablaJSON(this.responseText);
			} else {
				alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.");
			}
			break;
	}
}

function crearTablaJSON(respuesta) {
	var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = "";
	var resultados = JSON.parse(respuesta);
	var salida = "<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>DURACION</th></tr>";

	for (var i = 0; i < resultados.length; i++) {
		var objeto = resultados[i];
		salida += "<tr><td>" + objeto.nombre + "</td><td>" + objeto.genero + "</td><td>" + objeto.director + "</td><td>" + objeto.duracion + "</td></tr>";
	}

	salida += "</table>";

	divResultado.innerHTML = salida;
}