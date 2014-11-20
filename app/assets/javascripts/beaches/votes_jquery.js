$(document).ready(function() {
  $(document).on('click', '.vote-up', function(e) {
    $(this).html(function(val){
      var total =+ val + 1;
      $(this).text(' '+total);
    });
    e.preventDefault();
    e.stopPropagation();
  });
  $(document).on('click', '.vote-down', function(e) {
    $(this).html(function(val){
      var total = val - 1;
      $(this).text(' '+total);
    });
    e.preventDefault();
    e.stopPropagation();
  });
});
