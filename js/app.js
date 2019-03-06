var scTop = 0;


$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    $('header').addClass('fixed');
    if(!$('body').hasClass('mb')){
      $('#go_top').addClass('fixed');
    }
  }else{
    $('header').removeClass('fixed');
    $('#go_top').removeClass('fixed');
  }
});

