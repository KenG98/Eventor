Session.set('loggedInSeats', false);

Template.chooseSeatsActual.helpers({
	events: function () {
		return Events.find(Session.get('currentSeatEventOne')._id);
	}
});

Template.chooseseats.helpers({
	loggedInSeats: function () {
		return Session.get('loggedInSeats');
	}
});

Template.chooseseats.events({
	'submit .logintoseating': function () {
		var enteredUserID = parseInt(event.target.userIDBox.value);
		var enteredEventID = parseInt(event.target.eventIDBox.value);
		Session.set('entereduserid', enteredUserID);
		Session.set('enteredeventid', enteredEventID);
		var foundEventGeneral = Events.find({eventID: enteredEventID});
		Session.set('currentSeatEventGeneral', foundEventGeneral);
		var foundEventOne = Events.findOne({eventID: enteredEventID});
		Session.set('currentSeatEventOne', foundEventOne);
		if(foundEventOne != null){
			Session.set('loggedInSeats', true);
		}
		event.target.userIDBox.value = "";
		event.target.eventIDBox.value= "";
		return false;
	}
});