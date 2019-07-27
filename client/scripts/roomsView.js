var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$select.on('click', RoomsView.render);
  },

  render: function (messagesData) {
    // we want to re-render the chats with messages in the desired room
    var roomList = {};

    for (var i = 0; i < Object.keys(messagesData.results).length; i++) {
      var message = messagesData.results[i];
      var roomname = message.roomname
      if (!roomList[roomname] && roomname) {
        roomList[roomname] = roomname;
        RoomsView.renderRoom(roomname);
        // add unique roommname to select id
      }
      // create a single room for all empty string names
    }
  },

  renderRoom: function (roomname) {
    // we want to create a list of unique roomnames
    // and filter for roomname when selected
    // unique keys of roomList are unique roomnames
    var room = Rooms.render({
      roomname: roomname
    });

    $('#rooms select').append(room);
  },

  // enterRoom: function () {

  // }


  // filter by roomname and append message

};
