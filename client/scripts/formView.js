// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

//Solution
var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();


    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: Rooms.selected || 'lobby'
    };

    Parse.create(message, (data) => {
      _.extend(message, data[0]);
      Messages.add(message, MessagesView.render);
    });
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
// var FormView = {

//   $form: $('form'),

//   initialize: function () {
//     FormView.$form.on('submit', FormView.handleSubmit);
//   },

//   handleSubmit: function (event) {
//     // Stop the browser from submitting the form
//     event.preventDefault();

//     var input = document.querySelector('input').value;
//     var message = {};
//     message.roomname = Rooms.currentRoom;
//     message.text = input;
//     Parse.create(message);
//     // pass in the message;
//   },

//   setStatus: function (active) {
//     var status = active ? 'true' : null;
//     // disabled to active
//     FormView.$form.find('input[type=submit]').attr('active', status);
//   }
// };