console.log('loaded!');


$(document).ready(function(){
    $('.navbar a').click(function () {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
     });
 // $column = $('.column');

  // $column.on('mouseover', function(){
  //   console.log('moused over');
  //   var $this = $(this);
  //   // $(this).html('hello world');
  // //  $this.fadeIn('slow');
  //   setTimeout(function(){
  //     $this.fadeIn(150).delay(2000).fadeOut(300).delay(1254);
  //      console.log('hi!');
  //      // $(this).html('');
  //    }, 500);
  // });

    // setInterval(function () {
    //     $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
    //       $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
    //       $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
    //       $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
    //   }, 1);
    // });
  // $column.on('mouseover', function(){
  //   console.log('moused over');
  //   $(this).fadeIn('slow');
  //   // setTimeout(function(){
  //   //   $this.html('');
  //   //   console.log('hi!');
  //   // }, 2000);
  // });
});


    // <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>
