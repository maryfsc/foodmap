$(document).ready(function () {

  $('#logo-page').delay('2500').fadeOut('slow');
  $('#initial-page').hide().delay('2500').fadeIn('slow');

  initMap();

  $('#error-message').delay(1000).hide('slow');

  restaurantes.forEach((restaurant, index) => {
    $('#pics-wrapper').append('<img data-toggle="modal" data-target="#only-modal" data-whatever=' + restaurant.name + ' src=' + restaurant.image + ' id="rest' + index + '" class=' + restaurant.type + '>');
    
    $('#rest' + index).on('click', function () {
      $('#modal-restname').html('<h3 class="text-center">' + restaurant.name + '</h3>');
      $('#modal-body').html('<img class="align-self-center" src=' + restaurant.image + ' height="150"><p class="mx-4">' + restaurant.description + '<p>');
    });
  }); // termina arrow function primeiro forEach

  $('#filter-button').on('click', function () {
    $('#error-message').delay(1000).hide('slow');
    $('#message').delay(1000).show('slow');

    var userInput = $('#user-input').val();
    var count = 0;

    restaurantes.forEach((restaurant, index) => {
      if (userInput !== restaurant.name && userInput !== restaurant.type) {
        $('#rest' + index).delay(1000).hide('slow');
      } else {
        $('#rest' + index).delay(1000).show('slow');
        count += 1;
      } // termina if
    }) // termina arrow function segundo for each

    if (count === 0) {
      $('#error-message').delay(1000).show('slow');
      $('#message').delay(1000).hide('slow');

      restaurantes.forEach((restaurant, index) => {
        $('#rest' + index).delay(1000).show('slow');  
      });
    };
  }); // termina evento com button
}); // termina jquery

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map-wrapper'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}