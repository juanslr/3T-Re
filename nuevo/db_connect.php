<?php
/* Códigos para la conexión con el servidor de base de datos */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "securityhome";
$conn = mysqli_connect($servername, $username, $password, $dbname) or die("La conexion ha fallado: " . mysqli_connect_error());
//Condicional para verificar algún error
if (mysqli_connect_errno()) {
    printf("La conexión ha fallado: %s\n", mysqli_connect_error());
    exit();
}
?>