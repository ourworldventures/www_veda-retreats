$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 300,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 2,
    slideMargin: 10
  });
  var href = $(location).attr('href');
  var encodedUrl = encodeURIComponent(href);

  if (encodedUrl.includes("veda_1")) {
    $('.input').html($('#veda_1').html());
  } else if (encodedUrl.includes("veda_2")) {
    $('.input').html($('#veda_2').html());
  } else if (encodedUrl.includes("el_gouna")) {
    $('.input').html($('#el_gouna').html());
  } else if (encodedUrl.includes("greenboat")) {
    $('.input').html($('#greenboat').html());
  } else if (encodedUrl.includes("midori")) {
    $('.input').html($('#midori').html());
  } else {
    $('.input').html($('#veda_1').html());
  };

  $('.facilities > li > a').click(function() {
    var href = $(this).attr('href');
    $('.input').html($(href).html());
  });
});
