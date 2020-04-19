$(function(){
$("#formularioBusqueda").submit(function(event){
    event.preventDefault();
    realizarBusqueda();
});
$("#buscador").keyup(function(event){
    realizarBusqueda();
});
})

function realizarBusqueda(){
    let valorBusqueda = $("#buscador").val().trim();
    $.ajax({
        url:"servidor/datosBusqueda.php",
        data:{valor:valorBusqueda},
        method: "POST",
        dataType: "JSON"
    }).done(escribirResuldadoBusqueda)
        .fail(function(){
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION")
        });
}

function escribirResuldadoBusqueda(respuesta){
	let divResultado = $("#resultado");
	divResultado.empty();
	var resultados= respuesta;
	let salida="<table  class=table  border='2'><tr><th>NOMBRE</th><th>apellido1</th><th>apellido2</th><th>email</th><th>direccion</th><th>cp</th><th>pais</th><th>provincia</th><th>ciudad</th></tr>";

	for (let i=0; i < resultados.length; i++){
		let objeto = resultados[i];
		salida+="<tr><td>"+
		objeto.nombre+"</td><td>"+
		objeto.apellido1+"</td><td>"+
		objeto.apellido2+"</td><td>"+
		objeto.email +"</td><td>"+
		objeto.direccion+"</td><td>"+
        objeto.cp+"</td><td>"+
        objeto.pais+"</td><td>"+
		objeto.provincia+"</td><td>"+
		objeto.ciudad+"</td></tr>";
	}
	

	salida+="</table>";

	divResultado.html(salida);
}



