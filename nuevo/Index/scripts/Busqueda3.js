$(function(){
	$("#formCheckBusqueda").submit(function(event){
		event.preventDefault();
		realizarBusqueda3();
	});
	$("#checkboxBusqueda").change(function(event){
		realizarBusqueda3();
	});
	})

function crearTablaJSON3(respuesta){
	let divResultado =  document.getElementById("resultado");
	divResultado.innerHTML = "";
	document.getElementById("spinner").style ="display:block";
	var resultados = respuesta;
	let salida="<table class=table border='2'><tr><th>NOMBRE</th><th>apellido1</th><th>apellido2</th><th>email</th><th>direccion</th><th>cp</th><th>pais</th><th>provincia</th><th>ciudad</th></tr>";

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

	divResultado.innerHTML=salida;

}

function realizarBusqueda3(){
    let inputCheck = $("#checkboxBusqueda");
    let valorCheck = "";
    if(inputCheck.prop("checked")){
        valorCheck = inputCheck.val();
    }
    let form = new FormData();
    form.append("checkBusqueda",valorCheck);
    $("#spinner").css("display","block");
    fetch("servidor/datosBusqueda3.php", {
        method: 'post',
        body: form
    }).then(gestionarErrores)
      .then(function(response){ return response.json()})
      .then(crearTablaJSON3)
      .catch(function(err) {
            console.log(err);
            alert("SE HA PRODUCIDO UN ERROR LA PARSEAR LOS DATOS");
       })
      .finally(function(){
        $("#spinner").css("display","none");
       });
    }

    function gestionarErrores(response){
        if (!response.ok){
            throw Error("Se ha producido un error" +response);
        
        }
        return response;
    }