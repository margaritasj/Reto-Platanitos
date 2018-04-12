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
        // Creamos la imagen.
              document.getElementById("list").innerHTML = ['<img class="img-output" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
            };
          })(f);
          reader.readAsDataURL(f);
        }
       }
       document.getElementById('files').addEventListener('change', archivo, false);
    

})()  
    
    





    

    

