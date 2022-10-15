// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  storage: [],

  _getMessages: function () {

    return Messages.storage;



  },

  _singleMessage: function () {

    var message = {};

    Parse.readAll((data) => {
      // examine the response from the server request:
      message.text = data[0].text;
      message.username = data[0].username;
      message.campus = data[0].campus;
      message.room = data[0].roomname;

      // return all the data of a single message in OBJ format.
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });

    return message;
  }




  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.




};



// messages.js [ model ]     messagesView.js [controller ]   messageView.js [view]


// c