var AppView = Backbone.View.extend({
  el: "#body",
  homeTemplate: _.template($("#home-template").html()),
  morningTemplate: _.template($("#morning-template").html()),
  afternoonTemplate: _.template($("#afternoon-template").html()),
  eveningTemplate: _.template($("#evening-template").html()),
  initialize: function () {
    this.renderHome();
  },
  renderHome: function() {
    this.$el.html(this.homeTemplate());
  },
});