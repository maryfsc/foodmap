$(document).ready(function () {

  $('#logo-page').delay('2500').fadeOut('slow');

  $('#initial-page').hide();
  $('#initial-page').delay('2500').fadeIn('slow');

  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map-wrapper'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  initMap();

  $.getJSON('data.js', function(obj) {
    $.each(obj, function(src) {
      $('#pics-wrapper').append('<img src=' + image +'>');
    });
  });

//   $.getJSON('data.js', function(image) {
//   var restaurantPics = [];
//   $.each( image, function(val) {
//     restaurantPics.push('<img src="' + val + '">');
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: restaurantPics.join( "" )
//   }).appendTo('#pics-wrapper');
// });

});


