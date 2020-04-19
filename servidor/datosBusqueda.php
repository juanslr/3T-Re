<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "configuracion.php";

$valorBusqueda = $_POST["valor"]; //el valor que obtenemos tras la busqueda en AYAX 

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT id,nombre,apellido1,apellido2,email,direccion,cp,pais,provincia,ciudad FROM comprador WHERE nombre LIKE '%".$valorBusqueda."%'");
$stmt->execute();
$peliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($peliculas);
?>