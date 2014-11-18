$(document).ready(function(){
  $('.openRegister').click(function(e){
     e.stopPropagation();
      $('.register').css({
      'display':'block'
      });
      $('.register').animate({
      'margin-right':'0',
      }, 'slow');
  });

  $('.register').click(function(e){
    e.stopPropagation();
  });

  $(document).click(function(e){
    $('.register').animate({
    'margin-right':'-250',
    }, 'slow');
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      var _self = $('.register');
      $(_self).animate({
      'margin-right':'-250',
      }, 'slow');
    }
  }); // Press ESC will also close the drop-down
});
