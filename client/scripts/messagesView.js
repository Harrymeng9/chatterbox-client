// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),


  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // write the get methods and console it


  },

  render: function (roomName) {

    for (var i = 0; i < Messages.storage.length; i++) {
      var room = Messages.storage[i].roomname;

      var current = Messages.storage[i];

      if (room === roomName) {
        MessagesView.$chats.append(MessageView.render(current));
      }

    }





    //  MessagesView.$chats.append(MessageView.render(first));

    // TODO: Render _all_ the messages.
  },

  renderMessage: function (message) {
    // TODO: Render a single message.

    // Messages.single message return the values that would allow messageView Template to work

    // messages.JS (singleMessage method ) returns OBJ message data-

    // we use that data in the template.

    MessageView.render(message);
    MessagesView.$chats.append(MessageView.render(message));

    //MessagesView.$chats.prepend(MessageView.render(newMessage));
    // var _singleMessage = MessageView.render({username: message.username + ':', text: message.text});
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};