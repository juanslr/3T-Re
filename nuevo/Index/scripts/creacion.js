$("#sub").click( function() {
    $.post( $("#insertarDatos").attr("action"),
            $("#insertarDatos :input").serializeArray(),
            function(info){ $("#result").html(info);
      });
   clearInput();
   });
    
   $("#insertarDatos").submit( function() {
     return false;
   });
   function clearInput() {
       $("#insertarDatos :input").each( function() {
          $(this).val('');
       });
   }


   //https://aprenderaprogramar.com/foros/index.php?topic=4091.0