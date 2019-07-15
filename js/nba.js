var map;

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


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: result.latitude,
      lng: result.longitude
    },
    zoom: 8
  });
}