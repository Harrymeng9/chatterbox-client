// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $rooms: $('#rooms'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.renderRoom('Lobby');
    RoomsView.handleClick();
  },

  render: function () {
    // TODO: Render out the list of rooms.
    console.log(Rooms.storage, 'rooms storage');

    var uniqueRooms = {};

    for (var i = 0; i < Rooms.storage.length; i++) {
      var currentRoom = Rooms.storage[i].roomname;

      const regex = /^[0-9a-z]+$/;
      if (currentRoom !== null && currentRoom.length <= 20 && currentRoom.length > 0 ) {
        if (!uniqueRooms[currentRoom]) {
          uniqueRooms[currentRoom] = 1;
        }
      }
      // console.log(Rooms.storage[i].roomname);
    }

    var keys = Object.keys(uniqueRooms);

    var first = keys[0];

    Rooms.addRoom(first);

    for (var i = 0; i < keys.length; i++) {
      Rooms.addRoom(keys[i]);
    }


  },

  renderRoom: function (roomname) {
    // TODO: Render out a single room.



    RoomsView.$rooms.append(roomname);


  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.



    $('#rooms button').click(function () {
      $('#chats').empty();



      var roomname = $('#rooms select option:selected').val();
      MessagesView.render(roomname);




    });




  }




};
