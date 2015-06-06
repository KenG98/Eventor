Session.set('doneMakingEvent', false);

Template.makeevent.helpers({
  doneMakingEvent: function () {
    return Session.get('doneMakingEvent');
  }
});

Template.makeevent.events({
    'submit .new-event': function (event) {
      //pulled from form
      var eventName = event.target.eventName.value;
      var eventDate = event.target.eventDate.value;
      var eventTime = event.target.eventTime.value;
      var adminEmail = event.target.adminEmail.value;

      //necessary for emailing
      var eventID = Events.find().count();
      var eventPass = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
      //might have to change address in message
      // var message = "<html><p>You've made an event! <br>Your event ID: " + eventID + "<br>Your event password: " + eventPass + "<br>Click on this link to manage the event: eventor.meteor.com/manageevent?eventID="+eventID+"&eventPass="+eventPass+"</p></html>"
      var newEvent = {
        eventID: eventID,
        eventPassword: eventPass,
        administratorEmail: adminEmail,
        eventName: eventName,
        eventDate: eventDate,
        eventTime: eventTime
      };
      Events.insert(newEvent);

      //get rid of the form, switch to the other template
      Session.set('doneMakingEvent', true);
      return false;
    }
  });