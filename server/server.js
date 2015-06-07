Meteor.startup(function(){
	Events = new Mongo.Collection('events');
	//
	// Events.deny({
	// 	insert: function (userId, item) {
	// 		// might have to change address in message
	// 		var linkToSend = "keventer.meteor.com/manageevent?eventID="+item.eventID+"&eventPass="+item.eventPassword;
	// 		// var theLink = "<a href='" + linkToSend + "'>" + linkToSend + "</a>";
	// 		var message = "You made the event '" + item.eventName + "' \nEvent ID: " + item.eventID + "\nEvent Password: " + item.eventPassword + "\nClick here to manage your event: " + linkToSend;
	// 		console.log(linkToSend, message);
	// 		Email.send({
	// 			to: item.administratorEmail,
	// 			from: "noreply@ken.com",
	// 			subject: "Your event has been created!",
	// 			text: message
	// 		});
	// 		return false;
	// 	}
	// });

// Events.deny({
// 	insert: function (userId, doc) {
// 		return false;
// 	},
// 	update: function (userId, doc, fields, modifier) {
// 		return false;
// 	},
// 	remove: function (userId, doc) {
// 		return false;
// 	}
// 	// fetch: ['locked']
// });

// 	Events.allow({
// 		insert: function (userId, doc) {
// 			return true;
// 		},
// 		update: function (userId, doc, fields, modifier) {
// 			return true;
// 		},
// 		remove: function (userId, doc) {
// 			return true;
// 		}
// 		// fetch: ['owner']

// 	});
});