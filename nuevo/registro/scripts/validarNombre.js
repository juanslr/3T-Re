//Validar el nombre

$(function(){
    $("#nombre").keyup(function(){
        validarNombre();
    });
});

function validarNombre(){
    let valorNombre = $("#nombre").val();
    let camposAValidar = {};
    camposAValidar[$("#nombre").attr("name")]=validarNombre;
    $.ajax({
        url:"servidor/validar.php",
        data:camposAValidar,
        method: "POST",
        dataType: "JSON",
        beforeSend:function(){$("#spinner").css("display","block");}
    }) .done(tratarvalidacionNombre)
        .fail(function(){
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        })
        .always(function(){
            $("#spinner").css("display","none");
        });
    }

    function tratarValidacionNombre(respuesta){
        let campoValido = false;
        let errores = respuesta.nombre;
        //Reseteamos el estilo del input y quitamos los errores 
        //antes de proceder a comprobar la validación
        $("#nombre").removeClass("bg-success bg-danger");
        $("#divErroresNombre").html("")
        if(errores.length > 0){
            $("#nombre").addClass("bg-danger");
            for(let error of errores){
                $("#divErroresNombre").append("<div>"+error+"</div>");
            }
        }else{
            $("#nombre").addClass("bg-success"); 
            campoValido = true;
        }
        return campoValido;
    }






