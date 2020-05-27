<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "configuracion.php";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");

$valorBusqueda = $_POST["checkBusqueda"]; //el valor que obtenemos tras la busqueda en AYAX 


$where= "";
if($valorBusqueda != ""){
    $where = " WHERE bloqueado = '".$valorBusqueda."' "; 
}

$sql = "SELECT  id,nombre,apellido1,apellido2,email,direccion,cp,pais,provincia,ciudad FROM comprador ".$where;
$resultado = $conexion->query($sql);
$compradores = array();
if ($resultado->num_rows > 0) {
    while($comprador = $resultado->fetch_assoc()) {
        $compradores[] = $comprador;
    }
}
echo json_encode($compradores);