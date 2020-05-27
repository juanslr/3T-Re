"use strict";

//Validar el nombre
$(function () {
    $("#nombre").keyup(function () {
        validarNombre();
    });

    $("#pais").change(function () {
        ValidarPais();
    });

    $("#provincia").change(function () {
        ValidarProvincia();
    });

    $("#ciudad").change(function () {
        ValidarCiudad();
    });

    $("#formCrear").submit(function (event) {
        event.preventDefault();
        crearUsuario();
    });
});

function validarNombre() {
    var valorNombre = $("#nombre").val();
    var camposAValidar = {};
    camposAValidar[$("#nombre").attr("name")] = valorNombre;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionNombre).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}

function tratarValidacionNombre(respuesta) {
    var campoValido = false;
    var errores = respuesta.nombre;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#nombre").removeClass("bg-success bg-danger");
    $("#divErroresNombre").html("");
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#nombre").addClass("bg-danger");
        for (var error in errores) {
            $("#divErroresNombre").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#nombre").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

//validar apellido

$(function () {
    $("#apellido").keyup(function () {
        validarApellido();
    });
});

function validarApellido() {
    var valorApellido = $("#apellido").val();
    var camposAValidar = {};
    camposAValidar[$("#apellido").attr("name")] = valorApellido;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionApellido).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}

function tratarValidacionApellido(respuesta) {
    var campoValido = false;
    var errores = respuesta.apellido;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#apellido").removeClass("bg-success bg-danger");
    $("#divErroresApellido").html("");
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#apellido").addClass("bg-danger");
        for (var error in errores) {
            $("#divErroresApellido").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#apellido").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

//validar email

$(function () {
    $("#email").keyup(function () {
        validarEmail();
    });
});

function validarEmail() {
    var valorEmail = $("#email").val();
    var camposAValidar = {};
    camposAValidar[$("#email").attr("name")] = valorEmail;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionEmail).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}

function tratarValidacionEmail(respuesta) {
    var campoValido = false;
    var errores = respuesta.email;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#email").removeClass("bg-success bg-danger");
    $("#divErroresEmail").html("");
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#email").addClass("bg-danger");
        for (var error in errores) {
            $("#divErroresEmail").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#email").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

//validar Direccion

$(function () {
    $("#direccion").keyup(function () {
        validarDireccion();
    });
});

function validarDireccion() {
    var valorDireccion = $("#direccion").val();
    var camposAValidar = {};
    camposAValidar[$("#direccion").attr("name")] = valorDireccion;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionDireccion).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}

function tratarValidacionDireccion(respuesta) {
    var campoValido = false;
    var errores = respuesta.direccion;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#direccion").removeClass("bg-success bg-danger");
    $("#divErroresDireccion").html("");
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#direccion").addClass("bg-danger");
        for (var error in errores) {
            $("#divErroresDireccion").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#direccion").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

//validar CP

$(function () {
    $("#cp").keyup(function () {
        validarCP();
    });
});

function validarCP() {
    var valorCP = $("#cp").val();
    var camposAValidar = {};
    camposAValidar[$("#cp").attr("name")] = valorCP;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionCP).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}

function tratarValidacionCP(respuesta) {
    var campoValido = false;
    var errores = respuesta.cp;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#cp").removeClass("bg-success bg-danger");
    $("#divErroresCP").html("");
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#cp").addClass("bg-danger");
        for (var error in errores) {
            $("#divErroresCP").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#cp").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

//validar Pais
function ValidarPais() {
    var valorPais = $("#pais").val();
    var camposAValidar = {};
    camposAValidar[$("#pais").attr("name")] = valorPais;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionPais).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}
function tratarValidacionPais(respuesta) {
    var campoValido = false;
    var errores = respuesta.pais;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#pais").removeClass("bg-success bg-danger");
    $("#divErroresPais").html("");
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#pais").addClass("bg-danger");
        for (var error in errores) {
            $("#divErroresPais").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#pais").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

function crearUsuario() {
    var camposCrear = {}; //creo un array vacio al principio
    var valorNombre = $("#nombre").val().trim();
    camposCrear[$("#nombre").attr("name")] = valorNombre;

    var valorPais = $("#pais").val().trim();
    camposCrear[$("#pais").attr("name")] = valorPais;

    var valorApellido = $("#apellido").val().trim();
    camposCrear[$("#apellido").attr("name")] = valorApellido;

    var valorEmail = $("#email").val().trim();
    camposCrear[$("#email").attr("name")] = valorEmail;

    var valorDireccion = $("#direccion").val().trim();
    camposCrear[$("#direccion").attr("name")] = valorDireccion;

    var valorCP = $("#cp").val().trim();
    camposCrear[$("#cp").attr("name")] = valorCP;

    var valorProvincia = $("#provincia").val().trim();
    camposCrear[$("#provincia").attr("name")] = valorProvincia;

    var valorCiudad = $("#ciudad").val().trim();
    camposCrear[$("#ciudad").attr("name")] = valorCiudad;

    $.ajax({
        url: "servidor/crearUsuario.php",
        data: camposCrear,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarCreaciondeUsuario).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}

//validar Provincia
function ValidarProvincia() {
    var valorProvincia = $("#provincia").val();
    var camposAValidar = {};
    camposAValidar[$("#provincia").attr("name")] = valorProvincia;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionProvincia).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}
function tratarValidacionProvincia(respuesta) {
    var campoValido = false;
    var errores = respuesta.provincia;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#provincia").removeClass("bg-success bg-danger");
    $("#divErroresProvincia").html("");
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#provincia").addClass("bg-danger");
        for (var error in errores) {
            $("#divErroresProvincia").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#provincia").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

//validar Ciudad
function ValidarCiudad() {
    var valorCiudad = $("#ciudad").val();
    var camposAValidar = {};
    camposAValidar[$("#ciudad").attr("name")] = valorCiudad;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionCiudad).fail(function () {
        alert("ERROR EN LA PETICION");
        $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
    }).always(function () {
        $("#spinner").css("display", "none");
    });
}
function tratarValidacionCiudad(respuesta) {
    var campoValido = false;
    var errores = respuesta.ciudad;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#ciudad").removeClass("bg-success bg-danger");
    $("#divErroresCiudad").html("");
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#ciudad").addClass("bg-danger");
        for (var error in errores) {
            $("#divErroresCiudad").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#ciudad").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

function tratarCreaciondeUsuario(respuesta) {
    if (respuesta.correcto) {
        var valorId = respuesta.idCreado;
        $.ajax({
            url: "servidor/mostrar.php",
            data: { id: valorId },
            method: "GET",
            dataType: "JSON",
            beforeSend: function beforeSend() {
                $("#spinner").css("display", "block");
            }
        }).done(mostrarUsuario).fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
        }).always(function () {
            $("#spinner").css("display", "none");
        });
    } else {
        $("#divErroresID").addClass("bg-danger");
    }
}

function mostrarUsuario(respuesta) {
    $("#listadoID").append(respuesta.comprador);
}