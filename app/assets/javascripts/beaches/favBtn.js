$(document).ready(function() {
  $('.fav-btn i').click(function(e){
    e.preventDefault();
    $(this).toggleClass('fa-star-o fa-star');
  });
});
