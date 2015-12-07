console.log('loaded!');


$(document).ready(function(){
    $('.navbar a').click(function () {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
     });
 $special = $('.special');

  $special.on('mouseover', function(){
    console.log('moused over');
    var $this = $(this);
    var randomNum = Math.floor((Math.random() * 6) + 1);
    console.log(randomNum);
    if ($this.html() === ''){
      switch(randomNum) {
        case 1: $this.hide().html('<span class="label label-primary fadeInDown animated">Bootstrap</span>').fadeIn('slow').fadeOut('slow');
          break;
        case 2: $this.hide().html('<span class="label label-success">Javascript</span>').fadeIn('slow').fadeOut('slow');
          break;
        case 3: $this.hide().html('<span class="label label-info">Mean Stack</span>').fadeIn('slow').fadeOut('slow');
          break;
        case 4: $this.hide().html('<span class="label label-danger">Ruby on Rails</span>').fadeIn('slow').fadeOut('slow');
          break;
        case 5: $this.hide().html('<span class="label label-warning">MongoDB</span>').fadeIn('slow').fadeOut('slow');
          break;
        case 6: $this.hide().html('<span class="label label-default">jQuery</span>').fadeIn('slow').fadeOut('slow');
          break;
      }
    }
    setTimeout(function(){
      console.log('hi!');
      $this.show();
      $this.html('');
    }, 1500);
    // });
  });
//.animate({right: 20 }, 'slow')


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
