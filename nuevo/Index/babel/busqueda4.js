"use strict";

$(function () {
  $("#formCheckBusqueda").submit(function (event) {
    event.preventDefault();
    realizarBusqueda4();
  });
  $("#checkboxBusqueda").change(function (event) {
    realizarBusqueda4();
  });
});

function crearTablaJSON4(respuesta) {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
  document.getElementById("spinner").style = "display:block";
  var resultados = respuesta;
  var salida = "<table class=table border='2'><tr><th>NOMBRE</th><th>apellido1</th><th>apellido2</th><th>email</th><th>direccion</th><th>cp</th><th>pais</th><th>provincia</th><th>ciudad</th></tr>";

  for (var i = 0; i < resultados.length; i++) {
    var objeto = resultados[i];
    salida += "<tr><td>" + objeto.nombre + "</td><td>" + objeto.apellido1 + "</td><td>" + objeto.apellido2 + "</td><td>" + objeto.email + "</td><td>" + objeto.direccion + "</td><td>" + objeto.cp + "</td><td>" + objeto.pais + "</td><td>" + objeto.provincia + "</td><td>" + objeto.ciudad + "</td></tr>";
  }

  salida += "</table>";

  divResultado.innerHTML = salida;
}

function realizarBusqueda() {
  var inputCheck = $("#radioBusqueda");
  var valorCheck = "";
  if (inputCheck.prop("checked")) {
    valorCheck = inputCheck.val();
  }
  var form = new FormData();
  form.append("radioBusqueda", valorCheck);
  $("#spinner").css("display", "block");
  fetch("servidor/datosBusqueda3.php", {
    method: 'post',
    body: form
  }).then(gestionarErrores).then(function (response) {
    return response.json();
  }).then(crearTablaJSON4).catch(function (err) {
    console.log(err);
    alert("SE HA PRODUCIDO UN ERROR LA PARSEAR LOS DATOS");
  }).finally(function () {
    $("#spinner").css("display", "none");
  });
}

function gestionarErrores(response) {
  if (!response.ok) {
    throw Error("Se ha producido un error" + response);
  }
  return response;
}