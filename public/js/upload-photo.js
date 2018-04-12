(function () {
  
  var config = {
    apiKey: "AIzaSyCLoNdkDeyiO09zyiEpvVOubXExNSE-A5Y",
    authDomain: "platanitos-e4b00.firebaseapp.com",
    databaseURL: "https://platanitos-e4b00.firebaseio.com",
    projectId: "platanitos-e4b00",
    storageBucket: "platanitos-e4b00.appspot.com",
    messagingSenderId: "879145201085"
  };
  firebase.initializeApp(config);
  window.onload = initialize;

  var fileImage;
  var imagesReference;
  // imagenesFBRef

  function initialize() {
    
    fileImage = document.getElementById('files');
    fileImage.addEventListener('change', uploadImage, false);
    storageRef = firebase.storage().ref().child('imagenes');
    imagesReference = firebase.database().ref().child('imagenes')
    showImages();
    
  }

  function uploadImage() {
    
    var image = fileImage.files[0];
    document.getElementById("modal-login").style.display = 'none';
    document.getElementById("modal-photo").style.display = 'none';
    document.getElementById("modal-aceptar").style.display = 'block';
    document.getElementById("modal-comentario").style.display = 'none';
    document.getElementById("comentar").addEventListener("click", function () {
      
      var textArea = document.getElementById("textArea").value;
      localStorage.setItem("text", textArea);

    console.log(document.getElementById("textArea").value);
      document.getElementById("modal-photo").style.display = 'none';
      document.getElementById("modal-aceptar").style.display = 'none';
      document.getElementById("modal-comentario").style.display = 'none';
      document.getElementById("modal-subio").style.display = 'block';
      var uploadTask = storageRef.child(textArea).put(image)
      uploadTask.on('state_changed',
        function (snapshot) {},
        function (error) {
          alert('hubo un error');
        },
        function () {
          var downloadURL = uploadTask.snapshot.downloadURL;
          createNode(textArea, downloadURL);
        });
    });

    

    document.getElementById("aceptar").addEventListener("click", function () {
      var datotext = localStorage.getItem("text");
      document.getElementById("coment-photo").innerHTML = datotext; 
      

      document.getElementById("modal-comentario").style.display = 'block';
      document.getElementById("modal-photo").style.display = 'none';
      document.getElementById("modal-aceptar").style.display = 'none';
    });
    
    document.getElementById("cancelar").addEventListener("click", function () {
      document.getElementById("modal-photo").style.display = 'block';
      document.getElementById("modal-aceptar").style.display = 'none';
    });

    document.getElementById("close").addEventListener("click", function () {
      document.getElementById("modal-photo").style.display = 'block';
      document.getElementById("modal-aceptar").style.display = 'none';
    });

    document.getElementById("close-subio").addEventListener("click", function () {
      document.getElementById("modal-comentario").style.display = 'none';
      document.getElementById("modal-photo").style.display = 'block';
      document.getElementById("modal-aceptar").style.display = 'none';
    });

    document.getElementById("aceptar-subio").addEventListener("click", function () {
      document.getElementById("modal-comentario").style.display = 'none';
      document.getElementById("modal-photo").style.display = 'block';
      document.getElementById("modal-aceptar").style.display = 'none';
      document.getElementById("modal-subio").style.display = 'none';

    });
  }

  function showImages() {
    imagesReference.on('value', function (snapshot) {
      var datos = snapshot.val();
       var result = "";
      for (var key in datos) {
        result += ' <button type="button" data-toggle="modal" data-url="'+datos[key].url+'"  class=" bg-white"><img class="" src="' + datos[key].url + '"/> <p class="font-italic">"'+datos[key].nombre+'"</p> </button>';
      }
      document.getElementById('list').innerHTML = result;    
      
    })   
  }

  

  function createNode(nameImage, url) {
    imagesReference.push({
      nombre: nameImage,
      url: url
    });

  }

      
})()


document.getElementById("mostrar").addEventListener("click", function () {
  console.log('probando submit');
  
  document.getElementById("modal-login").style.display = 'none';
  document.getElementById("modal-photo").style.display = 'block';
});


    

    

