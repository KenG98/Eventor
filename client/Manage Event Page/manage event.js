Session.set('loggedInToEdit', false); 

Template.manageevent.helpers({
	loggedInToEdit: function () {
		return Session.get('loggedInToEdit');
	}
});

Template.loginToEdit.events({
	'submit .logInToEdit': function (event) {
		var enteredID = event.target.eventIDBox.value;
		var enteredPass = event.target.eventPasswordBox.value;
		console.log(enteredID, enteredPass);
		var foundEvent = Events.findOne({eventID: enteredID, eventPassword: enteredPass});
		console.log(foundEvent);
		return false;
	}
});