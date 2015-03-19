var AppView = Backbone.View.extend({
  el: "#menu",
  initialize: function () {
    this.init();
  },
  events: {
    'click #home-tab'       : 'renderHome',
    'click #morning-tab'    : 'renderMorning',
    'click #afternoon-tab'  : 'renderAfternoon',
    'click #evening-tab'    : 'renderEvening',
    'click .menu-item'      : 'triggerAnimation'
  },
  init: function() {
    var layoutView = new LayoutView();
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
});