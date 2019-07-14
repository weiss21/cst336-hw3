$(document).ready(function() {
  
function getPlayerGameLogs() {
  
  $.ajax ({
    url: "https://stats.nba.com/stats/playergamelog?DateFrom=&DateTo=&LeagueID=00&PlayerID=201942&Season=2018-19&SeasonType=Regular+Season&format=jsonp",
    dataType:"jsonp",
    success: function(response) {
      console.log(response.resultSets);
      populateTable(response.resultSets, 'CommonPlayerInfo');
      populateTable(response.resultSets, 'PlayerHeadlineStats');
    }
  })
  
}
  getPlayerGameLogs();
});

function populateTable(resultSets, setName) {
  var data = resultSets.filter(function(set){
    return set.name === setName;
  })[0];
  var headers = data.headers;
  var rowSet = data.rowSet;
  var table = $('#' + setName);
  var tr = table.append($('<tr>'));
  $(headers).each(function(){
    tr.append(tr.append($('<th>').text(this.toString())));
  });
  $(rowSet).each(function(){
    var tr = $('<tr>');
    this.forEach(function(item){
      tr.append($('<td>').text(item.toString()));
    });
    table.append(tr);
  });
}