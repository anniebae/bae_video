var NavView = Backbone.View.extend({
  el: "#nav",
  initialize: function () {
    this.init();
    eveningHours = new Timeline(timeline3);
    afternoonHours = new Timeline(timeline2);
    morningHours = new Timeline(timeline1);
  },
  events: {
<<<<<<< HEAD
    'click #home-tab'       : 'renderHome',
    'click #morning-tab'    : 'renderMorning',
    'click #afternoon-tab'  : 'renderAfternoon',
    'click #evening-tab'    : 'renderEvening',
    'click .menu-item'      : 'triggerAction'
=======
    'click #home-tab'      : 'renderHome',
    'click #morning-tab'   : 'renderMorning',
    'click #afternoon-tab' : 'renderAfternoon',
    'click #evening-tab'   : 'renderEvening',
    'click .menu-item'     : 'prep',
    'click #menu-toggle'   : 'toggle'
>>>>>>> c73259f075002fb4e489c40c24069209839d6f00
  },
  init: function() {
    layoutView = new LayoutView();
  },
  renderHome: function() {
    layoutView.home();
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
<<<<<<< HEAD
  triggerAction: function() {
    // SMOOTHSCROLL FUNCTION
    jQuery(function(){ $.localScroll({filter:'.smoothScroll'}); });

    // VIDEO MUTE FUNCTION
    $("video").prop('muted', true);
    console.log('we triggering?');

    // ANIMATION FUNCTION
=======
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
>>>>>>> c73259f075002fb4e489c40c24069209839d6f00
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
      autoPlay: 'true',
      autoPlayDirection: 'forward',
      startAt: 4,
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
      startAt: 4,
      // value: integer, default to 1 (first)
      autoPlay: 'true',
      // value: true | false, default to false
      autoPlayDirection: 'forward',
      // value: forward | backward, default to forward
      autoPlayPause: 4500
      // value: integer (1000 = 1 seg), default to 2000 (2segs)< });
  });
  },
});