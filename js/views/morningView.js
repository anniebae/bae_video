var MorningView = Backbone.View.extend({
  el: "#morning",
  morningTemplate: _.template($("#morning-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.morningTemplate());
  },
});