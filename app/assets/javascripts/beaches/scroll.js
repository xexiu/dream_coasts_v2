$(document).ready(function(){
// Fixed position Left Menu when scrolling
$(window).scroll(function(){
  $("#menu_items").css({
    "top": Math.max(0,50-$(this).scrollTop()),
    "position": "fixed"
  });
  var pageY = pageYOffset;
  if (pageY > 100 && pageY < 225 ) {
    $('#tag_1').addClass('active');
  }else{
    $('#tag_1').removeClass('active');
  }

  if (pageY > 225 && pageY < 338) {
    $('#tag_2').addClass('active');
  }else{
    $('#tag_2').removeClass('active');
  }

  if (pageY > 338 && pageY < 450) {
    $('#tag_3').addClass('active');
  }else{
    $('#tag_3').removeClass('active');
  }

  if (pageY > 450 && pageY < 560) {
    $('#tag_4').addClass('active');
  }else{
    $('#tag_4').removeClass('active');
  }

  if (pageY > 560 && pageY < 670) {
    $('#tag_5').addClass('active');
  }else{
    $('#tag_5').removeClass('active');
  }

  if (pageY > 670 && pageY < 780) {
    $('#tag_6').addClass('active');
  }else{
    $('#tag_6').removeClass('active');
  }

  if (pageY > 780 && pageY < 890) {
    $('#tag_7').addClass('active');
  }else{
    $('#tag_7').removeClass('active');
  }

  if (pageY > 890 && pageY < 1005) {
    $('#tag_8').addClass('active');
  }else{
    $('#tag_8').removeClass('active');
  }

  if (pageY > 1005 && pageY < 1115) {
    $('#tag_9').addClass('active');
  }else{
    $('#tag_9').removeClass('active');
  }

  if (pageY > 1115 && pageY < 1225) {
    $('#tag_10').addClass('active');
  }else{
    $('#tag_10').removeClass('active');
  }

  if (pageY > 1225 && pageY < 1335) {
    $('#tag_11').addClass('active');
  }else{
    $('#tag_11').removeClass('active');
  }

  if (pageY > 1335 && pageY < 1445) {
    $('#tag_12').addClass('active');
  }else{
    $('#tag_12').removeClass('active');
  }

  if (pageY > 1445 && pageY < 1560) {
    $('#tag_13').addClass('active');
  }else{
    $('#tag_13').removeClass('active');
  }

  if (pageY > 1560 && pageY < 1670) {
    $('#tag_14').addClass('active');
  }else{
    $('#tag_14').removeClass('active');
  }
});

$(document).on('click', '#tag_1', function(){
  $('body').animate({
    scrollTop: $('.TossadeMar').offset().top
  }, 1000);
  return false;
});

$(document).on('click', '#tag_2', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Begur').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_3', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Palamós').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on("click", '#tag_4', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.SantFeliudeGuí­xols').offset().top
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_5', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Lescala").offset().top-50
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_6', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Llafranc").offset().top-100
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_7', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".LEstartit").offset().top-120
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_8', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".Llancà").offset().top-120
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_9', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $(".PlatjadAro").offset().top-140
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_10', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Roses').offset().top-200
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_11', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.LloretdeMar').offset().top-220
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_12', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Tamariu').offset().top-240
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_13', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Empuriabrava').offset().top-260
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

$(document).on('click', '#tag_14', function(){
  //$('#10').addClass('active');
  $('body').animate({
    scrollTop: $('.Portbou').offset().top-260
}, 1000); //scroll to div with container as ID.
    return false; //Prevent Default and event bubbling.
  });

});
