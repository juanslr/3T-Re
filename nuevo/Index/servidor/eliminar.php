<?php
sleep(1);
require_once "configuracion.php";
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$nombre = $_POST['nombre'];

$sql = "DELETE FROM comprador WHERE nombre='$nombre';";
$comprador = $conexion->query($sql);
echo json_encode(1);