<?php
sleep(3);
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "configuracion.php";

$valorBusqueda = $_POST["valorBusqueda"]; //el valor que obtenemos tras la busqueda en AYAX 
$valorSelect = $_POST["valorSelect"];
$valorCheck = $_POST["valorCheck"];
$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//esto siempre va antes del execute
$sql = "SELECT * FROM comprador";

$sql .= " WHERE 1 ";
if($valorCheck !=""){
    $sql .= " AND bloqueado = " .$valorCheck;
}
if($valorSelect !=""){
    $sql .= " AND pais = '".$valorSelect."'";
}
if($valorBusqueda !=""){
    $sql .= " AND nombre LIKE  '%".$valorBusqueda."%' ";
}

$stmt = $conn->prepare($sql); 
$stmt->execute();
$peliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($peliculas);
?>
