console.log('loaded!');


$(document).ready(function(){

  $("#menu").vm_img();

  $('body').scrollspy({ target: '#menu', offset: 80 })
  // $('#navbar-links').scrollspy();

  // $('.button-margin a').click(function () {
  //     $('.button-margin a').removeClass('active');
  //     $(this).addClass('active');
  //  });

// $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// })

  // $('#menu').on('activate.bs.scrollspy', function () {
  // // do something…
  //       $('.button-margin a').removeClass('active');
  //     $(this).addClass('active');
  // })

 $special = $('.special');

  $special.on('mouseover', function(event){
    console.log('moused over');
    var $this = $(event.target);
    var randomNum = Math.floor((Math.random() * 7) + 1);
    console.log(randomNum);
    if ($this.html() === ''){
      switch(randomNum) {
        case 1: $this.append('<span class="label label-primary">CSS</span>').children().addClass('animated flipInX');
          break;
        case 2: $this.append('<span class="label label-success">Javascript</span>').children().addClass('animated flipInX');
          break;
        case 3: $this.append('<span class="label label-info">Mean Stack</span>').children().addClass('animated flipInX');
          break;
        case 4: $this.append('<span class="label label-danger">Ruby on Rails</span>').children().addClass('animated flipInX');
          break;
        case 5: $this.append('<span class="label label-warning">MongoDB</span>').children().addClass('animated flipInX');
          break;
        case 6: $this.append('<span class="label label-default">jQuery</span>').children().addClass('animated flipInX');
          break;
        case 7: $this.append('<span class="label" style="background-color:#7D2CB2">Angular</span>').children().addClass('animated flipInX');
          break;
      }
    }
    setTimeout(function(){
      $this.children().fadeOut('slow')
      setTimeout(function(){
       $this.show();
       $this.html('');
      }, 300);
    }, 1100);
    // });
  });
// .animate({right: 20 }, 'slow')


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
