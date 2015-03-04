$(function() {
  $("video").prop('muted', true);

  $("#timeline").timelinr({
    autoPlay: 'true',
    autoPlayDirection: 'forward',
    startAt: 4
  });

});