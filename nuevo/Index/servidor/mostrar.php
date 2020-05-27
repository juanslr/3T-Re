
<?php
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   $respuesta = array();
   require_once "configuracion.php";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT  id,nombre,apellido1,apellido2,email,direccion,cp,pais,provincia,ciudad FROM comprador WHERE id = ".$_GET['id'];
$resultado = $conexion->query($sql);
$compradores = array();
$html="";
if ($resultado->num_rows > 0) {
    while($compardor = $resultado->fetch_assoc()) {
        // ponemos la creacion del html
        $html = "<div>";
        $html .= "<div>nombre: ".$compardor["nombre"]."</div>";
        $html .= "<div>Apellido: ".$compardor["apellido1"]."</div>";
        $html .= "</div>";
    }
}
$respuesta["comprador"] = $html;
echo json_encode($respuesta);
?>