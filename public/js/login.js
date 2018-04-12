$('#text').on('keyup', function() {
       
     var text = $('#text');
 
     switch (true) {
     case text.val().length === 0:
     $('.men')
           .attr('src', '../assets/img-logueo/a-1.png');
           console.log(text.val());
     break;    
     case text.val().length === 2:
       $('.men')
         .attr('src', '../assets/img-logueo/a-2.png');
         console.log(text.val());
       break;
     case text.val().length  === 4:
       $('.men')
         .attr('src', '../assets/img-logueo/a-3.png');
       // mostrarImag(); 
       break;
      case text.val().length === 6 :
       $('.men')
         .attr('src', '../assets/img-logueo/a-4.png');
       // mostrarImag(); 
       break;
     case text.val().length  === 8:
       $('.men')
         .attr('src', '../assets/img-logueo/a-5.png');
       // mostrarImag(); 
       break;
     case text.val().length === 10:
       $('.men')
         .attr('src', '../assets/img-logueo/a-6.png');
       // mostrarImag();
       break;
     case text.val().length === 12:
       $('.men')
         .attr('src', '../assets/img-logueo/a-7.png');
       // mostrarImag();/a-8.png
       break;
     case text.val().length === 14:
       $('.men')
         .attr('src', '../assets/img-logueo/a-8.png');
       // mostrarImag();
       break;
     case text.val().length === 16:
       $('.men')
         .attr('src', '../assets/img-logueo/a-13.png');
       // mostrarImag();
       break;
     default:
       console.log('Disculpe aun estoy aprendiendo!');
     }
   });
 
   
 $('#password').on('keyup', function() {    
    var text = $('#password');
      switch (true) {
      case text.val().length === 0:
      $('.men')
            .attr('src', '../assets/img-logueo/a-1.png');
            console.log(text.val());
      break;    
      case text.val().length === 1:
        $('.men')
          .attr('src', '../assets/img-logueo/a-2.png');
          console.log(text.val());
        break;
      case text.val().length  === 2:
        $('.men')
          .attr('src', '../assets/img-logueo/a-3.png');
        // mostrarImag(); 
        break;
       case text.val().length === 3 :
        $('.men')
          .attr('src', '../assets/img-logueo/a-4.png');
        // mostrarImag(); 
        break;
      case text.val().length  === 4:
        $('.men')
          .attr('src', '../assets/img-logueo/a-5.png');
        // mostrarImag(); 
        break;
      case text.val().length === 5:
        $('.men')
          .attr('src', '../assets/img-logueo/a-6.png');
        // mostrarImag();
        break;
      case text.val().length === 6:
        $('.men')
          .attr('src', '../assets/img-logueo/a-7.png');
        // mostrarImag();/a-8.png
        break;
      case text.val().length === 7:
        $('.men')
          .attr('src', '../assets/img-logueo/a-8.png');
        // mostrarImag();
        break;
      case text.val().length === 8:
        $('.men')
          .attr('src', '../assets/img-logueo/a-13.png');
        // mostrarImag();
        break;
      default:
        console.log('Disculpe aun estoy aprendiendo!');
      }
    });