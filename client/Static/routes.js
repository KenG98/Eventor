Router.route('/', function () {
  this.render('home');
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/chooseseats', function () {
  this.render('chooseseats');
});

Router.route('/manageevent', function () {
  this.render('manageevent');
});

Router.route('/makeevent', function () {
  this.render('makeevent');
});

Router.route('/eventpage', function () {
  this.render('eventpage');
});

Router.route('/howtouse', function () {
  this.render('howtouse');
});

Router.route('/contact', function () {
  this.render('contact');
});

Router.route('/about', function () {
  this.render('about');
});
Router.route('/loginToEdit', function () {
  this.render('loginToEdit');
});
Router.route('/editEvent', function () {
  this.render('editEvent');
});


