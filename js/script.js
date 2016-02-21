$(document).ready(function() {
  $("#browser").text(window.navigator.userAgent);
  $(window).on('resize load', function(event) {
    $("#width").text(window.innerWidth);
    $("#height").text(window.innerHeight);
  });
});
