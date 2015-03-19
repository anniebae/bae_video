var AfternoonView = Backbone.View.extend({
  el: "#afternoon",
  afternoonTemplate: _.template($("#afternoon-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.afternoonTemplate());
  },
});