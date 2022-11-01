// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.


// Solution
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {

    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function () {

    RoomsView.$select.html('');
    Rooms
      .items()
      .each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function (roomname) {

    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function (event) {

    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function (event) {

    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }

};
// var RoomsView = {

//   $button: $('#rooms button'),
//   $select: $('#rooms select'),
//   $rooms: $('#rooms'),

//   initialize: function () {
//     // TODO: Perform any work which needs to be done
//     // when this view loads.
//     RoomsView.render();
//     RoomsView.renderRoom('Lobby');
//     RoomsView.handleClick();
//   },

//   render: function () {
//     // TODO: Render out the list of rooms.
//     console.log(Rooms.storage, 'rooms storage');
//     var uniqueRooms = {};

//     for (var i = 0; i < Rooms.storage.length; i++) {
//       var currentRoom = Rooms.storage[i].roomname;
//       const regex = /^[0-9a-z]+$/;
//       if (currentRoom !== null && currentRoom.length <= 20 && currentRoom.length > 0 ) {
//         if (!uniqueRooms[currentRoom]) {
//           uniqueRooms[currentRoom] = 1;
//         }
//       }
//       // console.log(Rooms.storage[i].roomname);
//     }

//     var keys = Object.keys(uniqueRooms);
//     var first = keys[0];
//     Rooms.add(first);

//     for (var i = 0; i < keys.length; i++) {
//       Rooms.add(keys[i]);
//     }
//   },

//   renderRoom: function (roomname) {
//     // TODO: Render out a single room.
//     RoomsView.$rooms.append(roomname);
//   },

//   handleChange: function (event) {
//     // TODO: Handle a user selecting a different room.
//   },

//   handleClick: function (event) {
//     // TODO: Handle the user clicking the "Add Room" button.

//     $('#rooms button').click(function () {
//       $('#chats').empty();

//       var roomname = $('#rooms select option:selected').val();
//       MessagesView.render(roomname);
//     });
//   }
// };
