$(function() {
  $("video").prop('muted', true);

  $("#timeline").timelinr({
    // autoPlay: 'true',
    // autoPlayDirection: 'forward',
    // startAt: 4

      orientation: 'horizontal',
      // value: horizontal | vertical, default to horizontal
      containerDiv: '#timeline',
      // value: any HTML tag or #id, default to #timeline
      datesDiv: '#dates',
      // value: any HTML tag or #id, default to #dates
      datesSelectedClass: 'selected',
      // value: any class, default to selected
      datesSpeed: 'normal',
      // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
      issuesDiv : '#issues',
      // value: any HTML tag or #id, default to #issues
      issuesSelectedClass: 'selected',
      // value: any class, default to selected
      issuesSpeed: 'normal',
      // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
      issuesTransparency: 0.2,
      // value: integer between 0 and 1 (recommended), default to 0.2
      issuesTransparencySpeed: 500,
      // value: integer between 100 and 1000 (recommended), default to 500 (normal)
      prevButton: '#prev',
      // value: any HTML tag or #id, default to #prev
      nextButton: '#next',
      // value: any HTML tag or #id, default to #next
      arrowKeys: 'false',
      // value: true/false, default to false
      startAt: 4,
      // value: integer, default to 1 (first)
      autoPlay: 'true',
      // value: true | false, default to false
      autoPlayDirection: 'forward',
      // value: forward | backward, default to forward
      autoPlayPause: 4500
      // value: integer (1000 = 1 seg), default to 2000 (2segs)< });


  });

});