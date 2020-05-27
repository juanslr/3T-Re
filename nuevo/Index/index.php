

<?php
include('header.php');
include_once("../db_connect.php");
?>
<title>SecurityHome</title>
<script type="text/javascript" src="script/bootbox.min.js"></script>
<script type="text/javascript" src="script/deleteRecords.js"></script>
<script type="text/javascript" src="script/editRecords.js"></script>
<script type="text/javascript" src="scripts/busqueda.js"></script>



<link rel="stylesheet" href="../style.css">

<?php include('container.php'); ?>


<div class="funcionesPropias">

	<h2>SecurityHome</h2>
	<div class="row">
	
		<form id="BusquedaTodos" class="form-inline my-2 my-lg-0">

			<!--Buscador Barra-->

			<label for="buscador"></label>
			<input placeholder="Buscar comprador" class="form-control mr-sm-2 col-md-5" id="buscador" type="text"></input>
			<button type="button" class="btn btn-primary">Buscar</button>



			<!--Buscador Select-->
			<!--Array para ver todos los nombres-->
			<div id="select">
				<div>
					<a> Por Pais:</a>
					<select id="selectBusqueda" class="form-control">
						<option value="">Ninguno</option>
						<option value="España">España</option>
						<option value="India">India</option>
					</select>
				</div>
			</div>

			<br>



	</div>
</div>
</form>

<table id="resultado" class="table">

	<thead>
		<tr>
			<th>ID</th>
			<th>Nombre</th>
			<th>Apellido</th>
			<th>Email</th>
			<th>CP</th>
			<th>Pais</th>
			<th>Provincia</th>
			<th>Ciudad</th>

			<th><i title="Eliminar Registro" class="glyphicon glyphicon-trash"></i></th>
		</tr>
	</thead>
	<tbody>
    <script>
    $(document).ready(function(){
        $('#resultado').DataTable();
    });
	</script>

		<?php

		$sql = "SELECT * FROM comprador";
		$resultset = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));

		while ($rows = mysqli_fetch_assoc($resultset)) {

		?>

			<tr data-idcomprador="<?php echo $rows["id"]; ?>">
				<th scope="row"><?php echo $rows["id"]; ?></th>
				<td id="nombrefila1"><?php echo $rows["nombre"]; ?></td>
				<td><?php echo $rows["apellido1"]; ?></td>

				<td><?php echo $rows["email"]; ?></td>
				<td><?php echo $rows["cp"]; ?></td>
				<td><?php echo $rows["pais"]; ?></td>
				<td><?php echo $rows["provincia"]; ?></td>
				<td><?php echo $rows["ciudad"]; ?></td>


				<th scope="row">
					<a class="delete_employee" data-emp-id="<?php echo $rows["id"]; ?>" href="javascript:void(0)">
						<i class="btn btn-danger">Eliminar</i>
					</a>

					<a class="edit_employee" data-emp-id="<?php echo $rows["id"]; ?>" href="javascript:void(0)">
					<button type="button" class="btn btn-primary">Editar</button>

					</a>

				</th>
			</tr>
		<?php
		}
		?>

	</tbody>
</table>

</div>
<?php include('footer.php'); ?>
