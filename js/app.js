$(document).ready(function () {

  $('#logo-page').delay('2500').fadeOut('slow');
  $('#initial-page').hide().delay('2500').fadeIn('slow');

  initMap();

  restaurantes.forEach((restaurant, index) => {
    $('#pics-wrapper').append('<img data-toggle="modal" data-target="#only-modal" data-whatever=' + restaurant.name + ' src=' + restaurant.image + ' id="rest' + index + '" class=' + restaurant.type + '>');
    
    $('#rest' + index).on('click', function () {
      $('#modal-restname').html('<h3 class="text-center">' + restaurant.name + '</h3>');
      $('#modal-body').html('<img class="align-self-center" src=' + restaurant.image + ' height="150"><p class="mx-4">' + restaurant.description + '<p>');
    })
  });


  // $('#user-input').on('input', function () {
  //   restaurantes.forEach(restaurant => {
  //     if ($(this).val() === restaurant.name || $(this).val(). === restaurant.type) {
  //       console.log('aeee');
  //     }
  //   })
  // })

});

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map-wrapper'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}