var LayoutView = Backbone.View.extend({
  el: "#view",
  homeTemplate: _.template($("#home-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.homeTemplate());
  },
});
