// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

// Solution
var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function () {

    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function (message) {

    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function (event) {

    // Get username from data attribute
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }

};
// var MessagesView = {

//   $chats: $('#chats'),

//   initialize: function () {
//     // TODO: Perform any work which needs to be done
//     // when this view loads.
//     // write the get methods and console it
//     //   MessagesView.handleClick();
//     MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
//     Friends.toggleStatus(name);
//   },

//   render: function (roomName) {
//     for (var i = 0; i < Messages.storage.length; i++) {
//       var room = Messages.storage[i].roomname;
//       var current = Messages.storage[i];
//       if (room === roomName) {
//         MessagesView.$chats.append(MessageView.render(current));
//       }
//     }
//     MessagesView.handleClick();
//     //  MessagesView.$chats.append(MessageView.render(first));
//     // TODO: Render _all_ the messages.
//   },

//   renderMessage: function (message) {
//     // TODO: Render a single message.
//     // Messages.single message return the values that would allow messageView Template to work
//     // messages.JS (singleMessage method ) returns OBJ message data-
//     // we use that data in the template.
//     MessageView.render(message);
//     MessagesView.$chats.append(MessageView.render(message));
//     Friends.initialize();
//     //MessagesView.$chats.prepend(MessageView.render(newMessage));
//     // var _singleMessage = MessageView.render({username: message.username + ':', text: message.text});
//   },

//   handleClick: function (event) {
//     // TODO: handle a user clicking on a message
//     // (this should add the sender to the user's friend list).
//     var name = $(this).text();
//     Friends.toggleStatus(name);
//     // $('.username').click(function () {
//     //   var name = $(this).text();
//     //   console.log(name);
//     //   Friends.toggleStatus(name);
//     // });
//   },
// };