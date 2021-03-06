"use strict";

//Dentro del form encontramos buscador, radio buscador y checkboxBuscador, ids de los inputs

$(function () {
    $("#BusquedaTodos").submit(function (event) {
        event.preventDefault();
        realizarBusquedaCompleta();
    });

    $("#buscador").keyup(function (event) {
        realizarBusquedaCompleta();
    });

    $("#selectBusqueda").change(function (event) {
        realizarBusquedaCompleta();
    });

    $("#checkboxBusqueda").change(function (event) {
        realizarBusquedaCompleta();
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

function realizarBusquedaCompleta() {
    var inputCheck = $("#radioBusqueda");
    var valorCheck = "";
    if (inputCheck.prop("checked")) {
        valorCheck = inputCheck.val();
    }
    var valorBusqueda = $("#buscador").val().trim();
    var valorSelect = $("#selectBusqueda").val();
    $.ajax({
        url: "servidor/BusquedaCompleta.php",
        data: { valorBusqueda: valorBusqueda, valorCheck: valorCheck, valorSelect: valorSelect },
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