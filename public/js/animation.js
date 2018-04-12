$(function () {
  /* Al presionar tecla del email cambia de carita - cambia de imagen */
  $('#email').on('keyup', function () {
    var email = $('#email');
    switch (true) {
      case email.val().length === 0:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-1.png');
        console.log(email.val());
        break;
      case email.val().length === 1:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-2.png');
        console.log(email.val());
        break;
      case email.val().length < 4:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-3.png');
        break;
      case email.val().length < 8:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-4.png');
        break;
      case email.val().length < 12:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-5.png');
        break;
      case email.val().length < 16:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-6.png');
        break;
      case email.val().length < 20:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-7.png');
        break;
      case email.val().length < 24:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-8.png');
        break;
      case email.val().length < 28:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-9.png');
        break;
      default:
        $('.avatar-platanitos')
          .attr('src', 'assets/img-logueo/a-9.png');
    }
  });
  /* Al realizar click al input email */
  $('#email').on('click', function () {
    var email = $('#email');
    email.focus(function () {
      $('.avatar-platanitos').attr('src', 'assets/img-logueo/a-1.png');
    })
  });

  /* Al realizar click al input password - mantiene una imagen */
  $('#password').on('focus', function () {
    var password = $('#password');
    $('.avatar-platanitos').attr('src', 'assets/img-logueo/a-13.png');
    if (password.val().length >= 0) {
      $('.avatar-platanitos').attr('src', 'assets/img-logueo/a-13.png');
    }
  });
});