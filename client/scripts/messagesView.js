var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    MessagesView.$chats.on('load', function () {
      MessagesView.render();
      // MessagesView.autoRefresh();
    });
  },

  render: function (messagesData) {

    for (var i = 0; i < messagesData.results.length; i++) {
      //TODO, print all list [DONE]
      // messagesData[i] this is an object with user, roomname, text
      // we want to restructure each object into a DOM node
      // we can do this with MessageView
      var message = messagesData.results[i];
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function (message) {
    // takes a single message and renders it as a html node
    // adds it to the chats
    var domMessage = MessageView.render({
      username: message.username,
      text: message.text,
      roomname: message.roomname
    });
    $('#chats').append(domMessage);
  },

  autoRefresh: function () {
    // call initialize
    console.log('inside autorefresh');
    setInterval(function () {

      $chats.html('');
      MessagesView.render();
    }, 2000)

  }

};