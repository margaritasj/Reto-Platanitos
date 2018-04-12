

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCLoNdkDeyiO09zyiEpvVOubXExNSE-A5Y",
    authDomain: "platanitos-e4b00.firebaseapp.com",
    databaseURL: "https://platanitos-e4b00.firebaseio.com",
    projectId: "platanitos-e4b00",
    storageBucket: "platanitos-e4b00.appspot.com",
    messagingSenderId: "879145201085"
  };
  firebase.initializeApp(config);

  /* ----------- hacemos login mediante email y password ----------- */
  var btnLogin = $('#btn-login');

  function loginEmailPassword() {
    var email = $('#email').val();
    var password = $('#password').val();

    console.log($('#email').val());
    console.log($('#password').val());

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
      window.location.href = '../../index.html';
    }).catch(function (error) {
      alert('Oh no! esta cuenta no se encuentra registrada, por favor verifica tu email o contraseña');
    });
  }

