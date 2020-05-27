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
    })
});


function validarNombre() {
    let valorNombre = $("#nombre").val();
    let camposAValidar = {};
    camposAValidar[$("#nombre").attr("name")] = valorNombre;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionNombre)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function tratarValidacionNombre(respuesta) {
    let campoValido = false;
    let errores = respuesta.nombre;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#nombre").removeClass("bg-success bg-danger");
    $("#divErroresNombre").html("")
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#nombre").addClass("bg-danger");
        for (let error in errores) {
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
    let valorApellido = $("#apellido").val();
    let camposAValidar = {};
    camposAValidar[$("#apellido").attr("name")] = valorApellido;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionApellido)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function tratarValidacionApellido(respuesta) {
    let campoValido = false;
    let errores = respuesta.apellido;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#apellido").removeClass("bg-success bg-danger");
    $("#divErroresApellido").html("")
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#apellido").addClass("bg-danger");
        for (let error in errores) {
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
    let valorEmail = $("#email").val();
    let camposAValidar = {};
    camposAValidar[$("#email").attr("name")] = valorEmail;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionEmail)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function tratarValidacionEmail(respuesta) {
    let campoValido = false;
    let errores = respuesta.email;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#email").removeClass("bg-success bg-danger");
    $("#divErroresEmail").html("")
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#email").addClass("bg-danger");
        for (let error in errores) {
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
    let valorDireccion = $("#direccion").val();
    let camposAValidar = {};
    camposAValidar[$("#direccion").attr("name")] = valorDireccion;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionDireccion)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function tratarValidacionDireccion(respuesta) {
    let campoValido = false;
    let errores = respuesta.direccion;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#direccion").removeClass("bg-success bg-danger");
    $("#divErroresDireccion").html("")
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#direccion").addClass("bg-danger");
        for (let error in errores) {
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
    let valorCP = $("#cp").val();
    let camposAValidar = {};
    camposAValidar[$("#cp").attr("name")] = valorCP;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () {
            $("#spinner").css("display", "block");
        }
    }).done(tratarValidacionCP)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function tratarValidacionCP(respuesta) {
    let campoValido = false;
    let errores = respuesta.cp;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#cp").removeClass("bg-success bg-danger");
    $("#divErroresCP").html("")
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#cp").addClass("bg-danger");
        for (let error in errores) {
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
    let valorPais = $("#pais").val();
    let camposAValidar = {};
    camposAValidar[$("#pais").attr("name")] = valorPais;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () {
            $("#spinner").css("display", "block");
        }
    })
        .done(tratarValidacionPais)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}
function tratarValidacionPais(respuesta) {
    let campoValido = false;
    let errores = respuesta.pais;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#pais").removeClass("bg-success bg-danger");
    $("#divErroresPais").html("")
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#pais").addClass("bg-danger");
        for (let error in errores) {
            $("#divErroresPais").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#pais").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

function crearUsuario() {
    let camposCrear = {};//creo un array vacio al principio
    let valorNombre = $("#nombre").val().trim();
    camposCrear[$("#nombre").attr("name")] = valorNombre;

    let valorPais = $("#pais").val().trim();
    camposCrear[$("#pais").attr("name")] = valorPais;

    let valorApellido = $("#apellido").val().trim();
    camposCrear[$("#apellido").attr("name")] = valorApellido;

    let valorEmail = $("#email").val().trim();
    camposCrear[$("#email").attr("name")] = valorEmail;

    let valorDireccion = $("#direccion").val().trim();
    camposCrear[$("#direccion").attr("name")] = valorDireccion;

    let valorCP = $("#cp").val().trim();
    camposCrear[$("#cp").attr("name")] = valorCP;

    let valorProvincia = $("#provincia").val().trim();
    camposCrear[$("#provincia").attr("name")] = valorProvincia;

    let valorCiudad = $("#ciudad").val().trim();
    camposCrear[$("#ciudad").attr("name")] = valorCiudad;

    $.ajax({
        url: "servidor/crearUsuario.php",
        data: camposCrear,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); }
    }).done(tratarCreaciondeUsuario)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}


//validar Provincia
function ValidarProvincia() {
    let valorProvincia = $("#provincia").val();
    let camposAValidar = {};
    camposAValidar[$("#provincia").attr("name")] = valorProvincia;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () {
            $("#spinner").css("display", "block");
        }
    })
        .done(tratarValidacionProvincia)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}
function tratarValidacionProvincia(respuesta) {
    let campoValido = false;
    let errores = respuesta.provincia;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#provincia").removeClass("bg-success bg-danger");
    $("#divErroresProvincia").html("")
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#provincia").addClass("bg-danger");
        for (let error in errores) {
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
    let valorCiudad = $("#ciudad").val();
    let camposAValidar = {};
    camposAValidar[$("#ciudad").attr("name")] = valorCiudad;
    $.ajax({
        url: "servidor/validar.php",
        data: camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend: function () {
            $("#spinner").css("display", "block");
        }
    })
        .done(tratarValidacionCiudad)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}
function tratarValidacionCiudad(respuesta) {
    let campoValido = false;
    let errores = respuesta.ciudad;
    //Reseteamos el estilo del input y quitamos los errores 
    //antes de proceder a comprobar la validación
    $("#ciudad").removeClass("bg-success bg-danger");
    $("#divErroresCiudad").html("")
    //se devuelve un array
    if (!$.isEmptyObject(errores)) {
        //Si tiene errores lo marcamos como erróneo y mostramos los errores
        $("#ciudad").addClass("bg-danger");
        for (let error in errores) {
            $("#divErroresCiudad").append("<div>" + errores[error] + "</div>");
        }
    } else {
        $("#ciudad").addClass("bg-success");
        campoValido = true;
    }
    return campoValido;
}

function tratarCreaciondeUsuario(respuesta){
    if(respuesta.correcto){
            let valorId= respuesta.idCreado;
            $.ajax({
                url: "servidor/mostrar.php",
                data:{id:valorId},
                method: "GET",
                dataType: "JSON",
                beforeSend: function () {
                    $("#spinner").css("display", "block");
                }
            })
                .done(mostrarUsuario)
                .fail(function () {
                    alert("ERROR EN LA PETICION");
                    $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
                })
                .always(function () {
                    $("#spinner").css("display", "none");
                });
    }else{
        $("#divErroresID").addClass("bg-danger");
    }
   
}

function mostrarUsuario(respuesta){
    $("#listadoID").append(respuesta.comprador);

}