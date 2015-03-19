var EveningView = Backbone.View.extend({
  el: "#evening",
  eveningTemplate: _.template($("#evening-template").html()),
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.eveningTemplate());
  },
});