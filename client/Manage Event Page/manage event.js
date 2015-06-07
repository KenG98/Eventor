Session.set('loggedInToEdit', false); 

Template.editevent.helpers({
	eventName: function(){
		return Session.get('currentEvent').eventName;
	},
	eventDate: function(){
		return Session.get('currentEvent').eventDate;
	},
	eventTime: function(){
		return Session.get('currentEvent').eventTime;
	},
	fittingEvents: function(){
		return Events.find(Session.get('currentEventId'));
	},
	allEvents: function(){
		return Events.find({});
	}
});

Template.editevent.events({
	'submit .add-guest': function (event) {
		var guestName = event.target.guestNameBox.value;
		var guestEmail = event.target.guestEmailBox.value;
		var guestID = Events.findOne({eventID: Session.get('currentEvent').eventID}).guests.length;
		// console.log(Events.find(Session.get('currentEventId'));
		// console.log(guestID);
		Events.upsert(Session.get('currentEvent')._id, {$push: {guests: {guestName: guestName, guestEmail: guestEmail, guestID: guestID}}});	
		console.log(Session.get('currentEvent'));
		event.target.guestNameBox.value = "";
 		event.target.guestEmailBox.value = "";
		return false;
	}
});

Template.manageevent.helpers({
	loggedInToEdit: function () {
		return Session.get('loggedInToEdit');
	}
});

Template.loginToEdit.events({
	'submit .logInToEdit': function (event) {
		var enteredID = parseInt(event.target.eventIDBox.value);
		var enteredPass = event.target.eventPasswordBox.value;
		Session.set('enteredid', enteredID);
		Session.set('enteredpass', enteredPass);
		var foundEvent = Events.findOne({eventID: enteredID, eventPassword: enteredPass});
		if(foundEvent != null){			
			Session.set('currentEvent', foundEvent);
			Session.set('currentEventId', foundEvent._id);
			Session.set('loggedInToEdit', true); 
		}
		return false;
	}
});