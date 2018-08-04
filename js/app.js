$(document).ready(function () {

  $('#logo-page').delay('2500').fadeOut('slow');
  $('#initial-page').hide().delay('2500').fadeIn('slow');

  initMap();

  $('#error-message').hide();

  restaurantes.forEach((restaurant, index) => {
    $('#pics-wrapper').append('<img data-toggle="modal" data-target="#only-modal" data-whatever=' + restaurant.name + ' src=' + restaurant.image + ' id="rest' + index + '" class=' + restaurant.type + '>');
    
    $('#rest' + index).on('click', function () {
      $('#modal-restname').html('<h3 class="text-center">' + restaurant.name + '</h3>');
      $('#modal-body').html('<img class="align-self-center" src=' + restaurant.image + ' height="150"><p class="mx-4">' + restaurant.description + '<p>');
    });
  }); // termina arrow function primeiro forEach

  $('#filter-button').on('click', function () {
    $('#error-message').hide();
    $('#message').show();
    var userInput = $('#user-input').val();
    var count = 0;

    restaurantes.forEach((restaurant, index) => {
      if (userInput !== restaurant.name && userInput !== restaurant.type) {
        $('#rest' + index).hide();
      } else {
        $('#rest' + index).show();
        count += 1;
      } // termina if
    }) // termina arrow function segundo for each

    if (count === 0) {
      $('#error-message').show();
      $('#message').hide();

      restaurantes.forEach((restaurant, index) => {
        $('#rest' + index).show();  
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