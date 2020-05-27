"use strict";

//Validar el nombre

$(function () {
    $("#nombre").keyup(function () {
        validarNombre();
    });
});

function validarNombre() {
    var valorNombre = $("#nombre").val();
    var camposAValidar = {};
    camposAValidar[$("#nombre").attr("name")] = validarNombre;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function beforeSend() {
            $("#spinner").css("display", "block");
        }
    }).done(tratarvalidacionNombre).fail(function () {
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
    if (errores.length > 0) {
        $("#nombre").addClass("bg-danger");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = errores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var error = _step.value;

                $("#divErroresNombre").append("<div>" + error + "</div>");
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    } else {
        $("#nombre").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}