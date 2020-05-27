<?php
sleep(2);
include_once("../db_connect.php");
if($_REQUEST['empid']) {
	$sql = "DELETE FROM comprador WHERE id='".$_REQUEST['empid']."'";
	$resultset = mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn));	
	if($resultset) {
		echo "Registro Borrado";
	}
}
?>
