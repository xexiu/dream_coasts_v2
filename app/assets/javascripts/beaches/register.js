$(document).ready(function(){
  $('.btn-register').click(function(e){
     e.stopPropagation();
      $('.register').css({
      'display':'block'
      });
      $('.register').animate({
      'width':'250px'
      }, 'slow');
  });

  $('.register').click(function(e){
    e.stopPropagation();
  });

  $(document).click(function(e){
    $('.register').animate({
    'width':'0px',
    }, 'slow');
    $('.register').css({
      'display':'none'
      });
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      var _self = $('.register');
      $(_self).animate({
      'margin-right':'-250'
      }, 'slow');
    }
  }); // Press ESC will also close the drop-down
});
