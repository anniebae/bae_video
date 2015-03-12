var AppView = Backbone.View.extend({
  el: "#menu",
  homeTemplate: _.template($("#home-template").html()),
  morningTemplate: _.template($("#morning-template").html()),
  afternoonTemplate: _.template($("#afternoon-template").html()),
  eveningTemplate: _.template($("#evening-template").html()),
  initialize: function () {
    this.renderHome();
  },
  events: {
    'click #home-tab'       : 'renderHome',
    'click #morning-tab'    : 'renderMorning',
    'click #afternoon-tab'  : 'renderAfternoon',
    'click #evening-tab'    : 'renderEvening',
    'click .menu-item'      : 'triggerAnimation',
    'click .arrow'          : 'triggerSmoothScroll'
  },
  renderHome: function() {
    $('#body').html(this.homeTemplate());
    return this;
  },
  renderMorning: function() {
    $('#body').html(this.morningTemplate());
    return this;
  },
  renderAfternoon: function() {
    $('#body').html(this.afternoonTemplate());
    return this;
  },
  renderEvening: function() {
    $('#body').html(this.eveningTemplate());
    return this;
  },
  triggerAnimation: function() {
    if ($('html').hasClass('no-js'))
      $('html').toggleClass('no-js js');
      if ($(window).width() <= 568) {
        $('.animate-in').removeClass('animate-in animating animate-out infinite').removeClass(effects.join(' '));
      } else {
        // Animate element
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
  triggerSmoothScroll: function() {
   $('a.smoothScroll').on('click', function() {
      $.smoothScroll({
        scrollElement: $('div#morning-vid-container'),
        scrollTarget: '#morning-timeline-container'
      });
      return false;
    });
  }
});