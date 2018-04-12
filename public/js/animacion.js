$(function () {
  /* Al presionar tecla del email cambia de carita - cambia de imagen */
  $('#email').on('keydown', function () {
    var email = $('#email');
    switch (true) {
      case email.val().length === 0:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-1.png');
        console.log(email.val());
        break;
      case email.val().length < 3:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-2.png');
        console.log(email.val());
        break;
      case email.val().length < 6:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-3.png');
        // mostrarImag(); 
        break;
      case email.val().length < 9:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-4.png');
        // mostrarImag(); 
        break;
      case email.val().length < 12:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-5.png');
        // mostrarImag(); 
        break;
      case email.val().length < 15:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-6.png');
        // mostrarImag();
        break;
      case email.val().length < 18:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-7.png');
        // mostrarImag();/a-8.png
        break;
      case email.val().length < 21:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-8.png');
        // mostrarImag();
        break;
      case email.val().length < 25:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-9.png');
        // mostrarImag();
        break;
      default:
        $('.avatar-platanitos')
          .attr('src', '../assets/img-logueo/a-9.png');
    }
  });
  /* Al realizar click al input email */
  $('#email').on('click', function () {
    var email = $('#email');
    email.focus(function () {
      $('.avatar-platanitos').attr('src', '../assets/img-logueo/a-1.png');
    })
  });

  /* Al realizar click al input password - mantiene una imagen */
  $('#password').on('click', function () {
    var password = $('#password');
    password.focus(function () {
      $('.avatar-platanitos').attr('src', '../assets/img-logueo/a-13.png');
    })
    if (password.val().length >= 0) {
      $('.avatar-platanitos').attr('src', '../assets/img-logueo/a-13.png');
    }
  });
});