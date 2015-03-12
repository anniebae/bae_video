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
    'click #evening-tab'     : 'renderEvening'
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
  },
  renderEvening: function() {
    $('#body').html(this.eveningTemplate());
  },
});