
$(document).ready(function () {
	$('.edit_employee').click(function (e) {


		var empid = $(this).attr('data-emp-id');
		var parent = $(this).parent("td").parent("tr");
		var fila = $("tr[data-idcomprador='" + empid + "']"); //concatenamos empid

		bootbox.prompt({
			title: "<i class='glyphicon glyphicon-pencil'></i> Escribe el nuevo nombre",

			buttons: {
				cancel: {
					label: "Cancelar",
					className: "btn-danger",
				},
				confirm: {
					label: "Editar",
					className: "btn-success",				
				}
			},


			centerVertical: true,
			callback: function (result) {
				console.log(result);
				if (result != null) {
					
					$.ajax({
						type: 'POST',
						url: 'editRecords.php',
						data: {empid:empid,nombre:result},
						beforeSend:function(){$("#spinner").css("display","block");}

					})
						.done(function (response) {
							document.getElementById("nombrefila1").innerHTML= result;
							bootbox.alert(response);
							$("#spinner").css("display","none");

						})
						.fail(function () {
							bootbox.alert('Error....');
						})
				}
			}
		});
	});
});
