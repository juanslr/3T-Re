"use strict";

$(function () {
	$("#formularioBusqueda").submit(function (event) {
		event.preventDefault();
		realizarBusqueda();
	});
	$("#buscador").keyup(function (event) {
		realizarBusqueda();
	});
});

function realizarBusqueda() {
	var valorBusqueda = $("#buscador").val().trim();
	$.ajax({
		url: "servidor/datosBusqueda.php",
		data: { valor: valorBusqueda },
		method: "POST",
		dataType: "JSON",
		beforeSend: function beforeSend() {
			$("#spinner").css("display", "block");
		}
	}).done(escribirResuldadoBusqueda).fail(function () {
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
	}).always(function () {
		$("#spinner").css("display", "none");
	});
}

/**Buscador Select */
$(function () {
	$("#buscadorSelect").submit(function (event) {
		event.preventDefault();
		realizarBusqueda2();
	});
	$("#selectBusqueda").change(function (event) {
		realizarBusqueda2();
	});
});

/**Buscador Radio */

$(function () {
	$("#buscadorradio").submit(function (event) {
		event.preventDefault();
		busquedaRadio();
	});
	$("#radio").keyup(function (event) {
		busquedaRadio();
	});
});

function busquedaRadio() {
	var valorBusqueda = $("#radio").val().trim();
	$.ajax({
		url: "servidor/datosBusqueda.php",
		data: { valor: valorBusqueda },
		method: "POST",
		dataType: "JSON"
	}).done(escribirResuldadoBusqueda).fail(function () {
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
	});
}

/**Buscador Checkbox */
$(function () {
	$("#buscadorcheckbox").submit(function (event) {
		event.preventDefault();
		busquedaCheckbox();
	});
	$("#checkbox").keyup(function (event) {
		busquedaCheckbox();
	});
});

function busquedaCheckbox() {
	var valorBusqueda = $("#checkbox").val().trim();
	$.ajax({
		url: "servidor/datosBusqueda.php",
		data: { valor: valorBusqueda },
		method: "POST",
		dataType: "JSON"
	}).done(escribirResuldadoBusqueda).fail(function () {
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
	});
}

function escribirResuldadoBusqueda(respuesta) {
	var divResultado = $("#resultado");
	divResultado.empty();
	var resultados = respuesta;
	var salida = "<table  class=table  border='2'><tr><th>NOMBRE</th><th>apellido1</th><th>apellido2</th><th>email</th><th>direccion</th><th>cp</th><th>pais</th><th>provincia</th><th>ciudad</th></tr>";

	for (var i = 0; i < resultados.length; i++) {
		var objeto = resultados[i];
		salida += "<tr><td>" + objeto.nombre + "</td><td>" + objeto.apellido1 + "</td><td>" + objeto.apellido2 + "</td><td>" + objeto.email + "</td><td>" + objeto.direccion + "</td><td>" + objeto.cp + "</td><td>" + objeto.pais + "</td><td>" + objeto.provincia + "</td><td>" + objeto.ciudad + "</td></tr>";
	}

	salida += "</table>";

	divResultado.html(salida);
}

//Peticion con xhr

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

function realizarBusqueda2() {
	var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = "";
	document.getElementById("spinner").style = "display:block";
	var miXHR = new objetoXHR();
	miXHR.open("POST", "servidor/datosBusqueda2.php", true);
	miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	miXHR.onreadystatechange = comprobarEstadoPeticion;
	var SelectBusqueda = document.getElementById("selectBusqueda");
	var valorBusqueda = SelectBusqueda.value;
	miXHR.send("valorSelectBusqueda=" + valorBusqueda);
}
function comprobarEstadoPeticion() {
	switch (this.readyState) {
		case 4:
			if (this.status == 200) {
				crearTablaJSON(this.responseText);
			} else {
				alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.");
			}
			document.getElementById("spinner").style = "display:none";
			break;
	}
}

function crearTablaJSON(respuesta) {
	var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = "";
	document.getElementById("spinner").style = "display:block";
	var resultados = JSON.parse(respuesta);
	var salida = "<table class=table border='2'><tr><th>NOMBRE</th><th>apellido1</th><th>apellido2</th><th>email</th><th>direccion</th><th>cp</th><th>pais</th><th>provincia</th><th>ciudad</th></tr>";

	for (var i = 0; i < resultados.length; i++) {
		var objeto = resultados[i];
		salida += "<tr><td>" + objeto.nombre + "</td><td>" + objeto.apellido1 + "</td><td>" + objeto.apellido2 + "</td><td>" + objeto.email + "</td><td>" + objeto.direccion + "</td><td>" + objeto.cp + "</td><td>" + objeto.pais + "</td><td>" + objeto.provincia + "</td><td>" + objeto.ciudad + "</td></tr>";
	}

	salida += "</table>";

	divResultado.innerHTML = salida;
}