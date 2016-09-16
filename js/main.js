$(document).ready(function(){

  $("#menu").vm_img();

  $('body').scrollspy({ target: '#menu', offset: 80 })

  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
          $(this).collapse('hide');
      }
  });

  $special = $('.special');

  $special.on('mouseover', function(event){
    var $this = $(event.target);
    var randomNum = Math.floor((Math.random() * 12) + 1);
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
        case 8: $this.append('<span class="label label-primary">React</span>').children().addClass('animated flipInX');
          break;
        case 9: $this.append('<span class="label label-success">Python</span>').children().addClass('animated flipInX');
          break;
        case 10: $this.append('<span class="label label-info">Django</span>').children().addClass('animated flipInX');
          break;
        case 11: $this.append('<span class="label label-danger">MySQL</span>').children().addClass('animated flipInX');
          break;
        case 12: $this.append('<span class="label label-warning">Selenium</span>').children().addClass('animated flipInX');
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
  });
});
