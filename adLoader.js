function getAdList(url) {
  $.ajax({
    url: url,
    success: function(data){
      $(data).find("a:contains(.xml)").each(function(){
        // will loop through
        $('.js-ad-select').append($('<option>', {
          value: $(this).attr("href"),
          text: $(this).attr("href")
        }));
        $('select').change(function() {
          var url = $( ".js-ad-select option:selected" ).text();
          loadPoc1();
          $(document).on('playerLoaded', function(e, player) {
            console.log('player loaded');
            console.log(player);
            player.ima3.settings.serverUrl = url;
          });

        });
      });
    },
    error: function(e, status, error) {
      console.log(e.statusCode());
      console.log(status);
      console.log(error);
    }
  });
}
getAdList('http://solutions.brightcove.com/cfuller/pluto/ads/');

