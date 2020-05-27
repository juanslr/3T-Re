$(document).ready(function(){  
	$('.delete_employee').click(function(e){   
	   e.preventDefault();   
	   var empid = $(this).attr('data-emp-id');
	   var parent = $(this).parent("td").parent("tr");  
	   var fila = $("tr[data-idcomprador='"+empid+"']"); //concatenamos empid

	   bootbox.dialog({
			message: "Estas seguro que quieres borrarlo ?",
			title: " Borrar !",
			buttons: {
				success: {
					  label: "No",
					  className: "btn-success",
					  callback: function() {
					  $('.bootbox').modal('hide');
					  
				  }
				},
				danger: {
				  label: "Borrar!",
				  className: "btn-danger",
				  callback: function() {       
				   $.ajax({        
						type: 'POST',
						url: 'deleteRecords.php',
						data: 'empid='+empid,   
						beforeSend:function(){$("#spinner").css("display","block");}
    
				   })
				   .done(function(response){        
						bootbox.alert(response);
						parent.fadeOut('slow'); 
						fila.fadeOut('slow');
						$("#spinner").css("display","none");

				   })
				   .fail(function(){        
						bootbox.alert('Error....');               
				   })              
				  }
				}
			}
	   });   
	});  
 });