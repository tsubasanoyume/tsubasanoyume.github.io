function init() {
  var mapCanvas = document.getElementById('map');

  var mapOptions = {
    scrollwheel: false,
    center: new google.maps.LatLng(59.9388218,30.3230753),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var image = './img/icon-map-pin.svg';
  var myLatLng = new google.maps.LatLng(59.9388218,30.3230753);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, 'load', init);
