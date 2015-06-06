Meteor.startup(function(){
	Events = new Mongo.Collection('events');
	Events.deny({
		insert: function (userId, item) {
			Email.send({
				to: "kengarber98@gmail.com",
				from: "me@me.com",
				subject: "test",
				text: "please work"
			});
			return false;
		}
	});
	Events.allow({
		insert: function (userId, item) { return true;}
	});
});