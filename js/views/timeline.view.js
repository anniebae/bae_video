var TimelineView = Backbone.View.extend({
	el: '#timeline-view',
	timelineTemplate: _.template($('#timeline-template').html()),
	initialize: function() {
		this.render();
	},
	morning: function() {
		this.$el.html(timelineTemplate());
		return this;
	},
	afternoon: function() {

	},
	evening: function() {

	},
});