function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(23.6, 120.0),
        zoom: 7
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
