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
	numbPeoplePerTable: function(){
		return Session.get('currentEvent').numbPeoplePerTable;
	}, 
	guests: function (){
		return Session.get('currentEvent').guests;
	}
});

Template.editevent.events({
	'submit .add-guest': function (event) {
		var guestName = event.target.guestNameBox.value;
		var guestEmail = event.target.guestEmailBox.value;
		Events.upsert({_id: Session.get('currentEvent')._id}, {$push: {guests: {guestName: guestName}}});
		console.log(Session.get('currentEvent'));
		// Session.get('currentEvent').guests.push({guestName: guestName, guestEmail: guestEmail});
		// Meteor.call('guestUpsert', Session.get('currentEvent')._id , {guestName: guestName, guestEmail: guestEmail});
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
		var foundEvent = Events.findOne({eventID: enteredID, eventPassword: enteredPass});
		if(foundEvent != null){
			Session.set('currentEvent', foundEvent);
			Session.set('loggedInToEdit', true); 
		}
		return false;
	}
});