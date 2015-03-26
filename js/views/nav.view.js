var NavView = Backbone.View.extend({
  el: "#nav",
  initialize: function () {
    this.init();
    this.mute();
    eveningHours = new Timeline(timeline3);
    afternoonHours = new Timeline(timeline2);
    morningHours = new Timeline(timeline1);
    // morningHours (instantiated collection) = new Timeline(collection)(timeline(data- array of objects with new models))
  },
  events: {
    'click #home-tab'      : 'renderHome',
    'click #morning-tab'   : 'renderMorning',
    'click #afternoon-tab' : 'renderAfternoon',
    'click #evening-tab'   : 'renderEvening',
    'click #contacts-tab'  : 'renderContacts',
    'click .menu-item'     : 'prep',
    'click #menu-toggle'   : 'toggle'
  },
  init: function() {
    layoutView = new LayoutView();
  },
  renderHome: function() {
    layoutView.home();
    $('#timeline-view').empty();
  },
  renderMorning: function() {
    layoutView.morning();
    part = "morning";
    this.renderTimeline(morningHours, part);
  },
  renderAfternoon: function() {
    layoutView.afternoon();
    part = "afternoon";
    this.renderTimeline(afternoonHours, part);
  },
  renderEvening: function() {
    layoutView.evening();
    part = "evening";
    this.renderTimeline(eveningHours, part);
  },
  renderTimeline: function(collection, part) {
    timelineView = new TimelineView({collection: collection});
    part = part;
    return this;
  },
  prep: function() {
    this.mute();
    this.pan();
    this.toggle();
    this.roll();
    this.timeline();
  },
  toggle: function() {
    if ($('#menu').hasClass('open')) {
      $('#menu').removeClass('open');
      $('#menu-toggle').removeClass('open');
    } else {
      $('#menu').addClass('open');
      $('#menu-toggle').addClass('open');
    }
  },
  pan: function() {
    $.localScroll({filter:'.smoothScroll'});
  },
  mute: function() {
    $("video").prop('muted', true);
  },
  roll: function() {
    if ($('html').hasClass('no-js'))
      $('html').toggleClass('no-js js');
      if ($(window).width() <= 568) {
        $('.animate-in').removeClass('animate-in animating animate-out infinite').removeClass(effects.join(' '));
      } else {
        $('.animate-in').each(function(i, elem) {
          var type = $(elem).attr('data-anim-type'),
          delay = $(elem).attr('data-anim-delay');
          $(elem).appear(function () {
            setTimeout(function() {
            $(elem).addClass('animating').addClass(type).removeClass('animate-in');
            }, delay);
            $(elem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(elem).removeClass('animating').removeClass(effects.join(' '));
            });
          }, { accX: 0, accY: -100 });
        });
      }
  },
  timeline: function() {
    $("#timeline").timelinr({
      orientation: 'horizontal',
      // value: horizontal | vertical, default to horizontal
      containerDiv: '#timeline',
      // value: any HTML tag or #id, default to #morning-timeline
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
      startAt: 1,
      // value: integer, default to 1 (first)
      autoPlay: 'true',
      // value: true | false, default to false
      autoPlayDirection: 'forward',
      // value: forward | backward, default to forward
      autoPlayPause: 4500
      // value: integer (1000 = 1 seg), default to 2000 (2segs)< });
  });
  },
  renderContacts: function() {
    layoutView.contacts();
  },
});