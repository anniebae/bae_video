var LayoutView = Backbone.View.extend({
  el: "#view",
  homeTemplate: _.template($("#home-template").html()),
  morningTemplate: _.template($("#morning-template").html()),
  afternoonTemplate: _.template($("#afternoon-template").html()),
  eveningTemplate: _.template($("#evening-template").html()),
  contactsTemplate: _.template($("#contacts-template").html()),
  initialize: function() {
  	this.home();
  },
  home: function() {
    this.$el.html(this.homeTemplate());
    $('#tooltip').tooltip();
    return this;
  },
  morning: function() {
    this.$el.html(this.morningTemplate());
    return this;
  },
  afternoon: function() {
  	this.$el.html(this.afternoonTemplate());
  	return this;
  },
  evening: function() {
  	this.$el.html(this.eveningTemplate());
  	return this;
  },
  contacts: function() {
    this.$el.html(this.contactsTemplate());
    return this;
  }
});
