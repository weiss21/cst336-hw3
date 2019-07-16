var map;
var lati;
var longi;

$("#zip").on("change", function() {
  $('#zipError').html("");

  $.ajax({
    method: "GET",
    url: "https://cst336.herokuapp.com/projects/api/cityInfoAPI.php",
    dataType: "json",
    data: {
      "zip": $("#zip").val()
    },
    success: function(result, status) {
      if (result) {
        $('#city').html(result.city);
        $('#latitude').html(result.latitude);
        $('#longitude').html(result.longitude);
      } else {
        $('#zipError').html("Zip code not found.");
        $('#zipError').css("color", "red")
        $('#city').html('');
        $('#latitude').html('');
        $('#longitude').html('');
      }
      
      lati = parseFloat(result.latitude);
      longi = parseFloat(result.longitude);
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
    zoom: 8,

  });
  

}