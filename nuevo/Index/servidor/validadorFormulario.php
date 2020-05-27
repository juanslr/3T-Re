<?php

function validarCampos(){
    $errores = [];

    if(isset($_POST["nombre"])){
        $valornombre = $_POST["nombre"];
        $errores["nombre"] = [];
        if(!preg_match("/^[aA-zZ]+$/",$valornombre)){
            $errores["nombre"]["mayus"] = "Solo se permiten letras mayusculas";

        }
    }

    if(isset($_POST["apellido"])){
        $valorapellido = $_POST["apellido"];
        $errores["apellido"] = [];
        if(!preg_match("/^[A-zZ]+$/",$valorapellido)){
            $errores["apellido"]["mayus"] = "La primera letra debe ser mayuscula";

        }
        
    }

    if(isset($_POST["email"])){
        $valoremail = $_POST["email"];
        $errores["email"] = [];
        if(!preg_match("/^[a-zZ0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/",$valoremail)){ //nombre de usuario + @ + servidor + dominio http://programacion.jias.es/2012/03/validar-direccion-de-correo-con-expresiones-regulares-en-javascript/
            $errores["email"]["mayus"] = "Introduce un correo valido";

        }
    }

    if(isset($_POST["direccion"])){
        $valordireccion = $_POST["direccion"];
        $errores["direccion"] = [];
        if(!preg_match("/[a-z0-9]+/",$valordireccion)){
            $errores["direccion"]["mayus"] = "Escribe bien tu direccion y evita ponerlo todo en mayusculas";

        }
    }

    if(isset($_POST["cp"])){
        $valorcp = $_POST["cp"];
        $errores["cp"] = [];
        if(!preg_match("/[0-9]+/",$valorcp)){
            $errores["cp"]["mayus"] = "Solo se permiten numeros";

        }
    }

    if(isset($_POST["pais"])){
        $valorpais = $_POST["pais"];
        if($valorpais == "0"){
            $errores["pais"]["ninguno"] = "Selecciona un campo";
        }else{
            $valoresPosibles = array("España","India");
            if(!in_array($valorpais,$valoresPosibles)){
                $errores["pais"]["array"] = "Opcion no valida";
            }

        }

    }

    if(isset($_POST["provincia"])){
        $valorProvincia = $_POST["provincia"];
        if($valorProvincia == "0"){
            $errores["provincia"]["ninguno"] = "Selecciona un campo";
        }else{
            $valoresPosibles = array("Andalucia","Parikitesh");
            if(!in_array($valorProvincia,$valoresPosibles)){
                $errores["provincia"]["array"] = "Opcion no valida";
            }

        }

    }

    if(isset($_POST["ciudad"])){
        $valorciudad = $_POST["ciudad"];
        if($valorciudad == "0"){
            $errores["ciudad"]["ninguno"] = "Selecciona un campo";
        }else{
            $valoresPosibles = array("Sevilla","Allmahade");
            if(!in_array($valorciudad,$valoresPosibles)){
                $errores["ciudad"]["array"] = "Opcion no valida";
            }

        }

    }



    
    return $errores;
}

?>