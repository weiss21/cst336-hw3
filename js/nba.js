var map;
var lati;
var longi;

$("#zip").on("change", function() {
  $('#zipError').html("");

  $.ajax({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?&APPID=cad194366bc68ad8027d37715d74fb0b",
    dataType: "json",
    data: {
      "zip": $("#zip").val()
    },
    success: function(result, status) {
      if (result) {
        $('#city').html(result.name);
        $('#latitude').html(result.coord.lat);
        $('#longitude').html(result.coord.lon);
      } else {
        $('#zipError').html("Zip code not found.");
        $('#zipError').css("color", "red")
        $('#city').html('');
        $('#latitude').html('');
        $('#longitude').html('');
      }

      lati = parseFloat(result.coord.lat);
      longi = parseFloat(result.coord.lon);
      initMap();
    },
    error: function() {
      $('#zipError').html("Zip code not found.");
      $('#zipError').css("color", "red")

      $('#city').html('');
      $('#latitude').html('');
      $('#longitude').html('');
    }
  }); // ajax
});
//      lati = result.latitude;
//     longi = result.longitude;
//      location.reload();
//     initMap();


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: lati,
      lng: longi
    },
    zoom: 14,

  });


}