(function(){
    function archivo(evt) {
        var files = evt.target.files;
        for (var i = 0, f; f = files[i]; i++) {
          if (!f.type.match('image.*')) {
            continue;
          }
          var reader = new FileReader();
          reader.onload = (function(theFile) {
            return function(e) {
              document.getElementById("modal-photo").style.display ='none';
              document.getElementById("modal-aceptar").style.display ='block';

              document.getElementById("aceptar").addEventListener("click", Aceptar);

              function Aceptar () {
                
                document.getElementById("list").innerHTML = ['<img class="img-output img-thumbnail" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
              }

              document.getElementById("close").addEventListener("click", Cerrar);
              document.getElementById("cancelar").addEventListener("click", Cerrar);

              function Cerrar () {
                document.getElementById("modal-photo").style.display ='block';
              document.getElementById("modal-aceptar").style.display ='none';
                
              }

              document.getElementById("cancelar").addEventListener("click", Cerrar);

             
        // Creamos la imagen.
              
            };
          })(f);
          reader.readAsDataURL(f);
        }
       }
       document.getElementById('files').addEventListener('change', archivo, false);
    

})()  
    
    





    

    

