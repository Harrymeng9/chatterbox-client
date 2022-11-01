// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.


// Solution
var Messages = {

  _data: {},

  items: function () {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function (message, callback = () => { }) {
    Messages._data[message.message_id] = message;
    callback(Messages.items());
  },

  update: function (messages, callback = () => { }) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.message_id] = Messages._conform(message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function (message) {
    // ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }

};
// var Messages = {

//   // TODO: Define how you want to store your messages.
//   _data: null,
//   storage: [],

//   _getMessages: function () {
//     return Messages.storage;
//   },

//   _singleMessage: function () {
//     var message = {};
//     Parse.readAll((data) => {
//       // examine the response from the server request:
//       message.text = data[0].text;
//       message.username = data[0].username;
//       message.campus = data[0].campus;
//       message.room = data[0].roomname;
//       // return all the data of a single message in OBJ format.
//       // TODO: Use the data to update Messages and Rooms
//       // and re-render the corresponding views.
//     });
//     return message;
//   }
//   // TODO: Define methods which allow you to retrieve from,
//   // add to, and generally interact with the messages.
// };