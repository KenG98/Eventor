Session.set('loggedInSeats', false);

Template.chooseSeatsActual.events({
	'submit .selectSeatmates': function (event, template) {
		// console.log(event.target.checked);
		var selected = template.findAll("input[type=checkbox]:checked");
		crucialPeople = [];
		wantedPeople = []
		_.map(selected, function(item, template) {
			if(item.name == "crucialBox"){
				crucialPeople.push(item.value);
			}
			if(item.name == "wantBox"){
				wantedPeople.push(item.value);
			}
		});
		Session.set('currentGuestRequest', {
			guestsWanted: wantedPeople,
			guestsNeeded: crucialPeople
		});
		// Session.set('guestnow', Events.findOne({eventID: Session.get('currentSeatEventOne').eventID}).guests[Session.get('entereduserid')]);
		// console.log(Events.findOne({eventID: Session.get('currentSeatEventOne').eventID}).guests[Session.get('entereduserid')]);
		// Events.findOne({eventID: Session.get('currentSeatEventOne').eventID}).guests[Session.get('entereduserid')].push(Session.get('currentGuestRequest'));
		// Events.upsert(eventID: Session.get('currentSeatEventOne').eventID, {$set: {Session.get('guestnow'): Session.get('currentGuestRequest')}});
		// Meteor.call('addGuestRequest', 1, function (error, result) {});
		// Meteor.call('addGuestRequest', {eventID: Session.get('currentSeatEventOne').eventID, guestID: Session.get('entereduserid'), guestRequest: Session.get('currentGuestRequest')});
		return false;
	}
});

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