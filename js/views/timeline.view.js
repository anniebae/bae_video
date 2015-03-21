var TimelineView = Backbone.View.extend({
	el: '#timeline-view',
	timelineTemplate: _.template($('#timeline-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.timelineTemplate());
		return this;
	},
});