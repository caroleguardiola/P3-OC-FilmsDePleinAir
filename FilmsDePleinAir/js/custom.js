$(function () {

    function initMap() {

        var location = new google.maps.LatLng(48.879683, 2.309062);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'img/ic_place_48px.svg';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
        });


        var contentString = '<div class="info-window">' +
                '<h3>Festival Les Films de Plein Air</h3>' +
                '<div class="info-content">' +
                '<p>Découverte GRATUITE de films en Plein Air</p>' +
                '<p>Parc Monceau Paris</p>' +
                '<p>Du 5 au 8 août 2017</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
      

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
    $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    