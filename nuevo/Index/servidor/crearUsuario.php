<?php
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');

    require_once "validadorFormulario.php";
    $respuesta = array();
    $respuesta["correcto"] = false; //esta variable verifica que todo este correcto
    $errores = validarCampos();
    $respuesta["errores"] = $errores; //de esta forma guardamos los errores
    $hayErrores = false;
    foreach($errores as $campo => $erroresCampo){
        if(count($erroresCampo)> 0){
            $hayErrores = true;
            break;
        }
    }
    if(!$hayErrores){
        require_once "configuracion.php";
        $conexion = mysqli_connect($servidor, $usuario, $password, $baseDatos);
       
        $nombre = $_POST['nombre'];//ESTE VALOR TIENE QUE SER EL MISMO QUE EL DE JS 
        $apellido = $_POST['apellido'];
        $email = $_POST['email'];
        $direccion = $_POST['direccion'];
        $cp = $_POST['cp'];
        $pais = $_POST['pais'];
        $provincia = $_POST['provincia'];
        $ciudad = $_POST['ciudad'];
     
         $consulta = "INSERT INTO comprador (nombre, apellido1, email, direccion, cp, pais, provincia, ciudad) VALUES ('$nombre', '$apellido', '$email','$direccion', '$cp', '$pais', '$provincia', '$ciudad')";
         if ($conexion->query($consulta) === TRUE) {
            $ultimo_id = $conexion->insert_id;
            $respuesta["idCreado"] = $ultimo_id;
            $respuesta["correcto"] = true; //si todo esta bien corecto pasa a ser true
           } else {
             echo "Error: " . $consulta . "<br>" . $conexion->error;
           }
        }else{
     //devolvemos errores;
    }
   
   
    //$resultado = $conexion->query($consulta);
    echo json_encode($respuesta);       
       ?>