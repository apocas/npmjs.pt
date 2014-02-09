$(document).ready(function() {
  $.get('/stats', function(data) {
    $('.stat').html(JSON.parse(data).couchdb.database_reads.current);
    $('.stats').show();
  });
});
