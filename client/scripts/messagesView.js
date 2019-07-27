var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('load', function() {
      MessagesView.render(); 
      MessagesView.autoRefresh();
    });
  },

  render: function(messagesData) { 
    // console.table(messagesData.results[0]);

    // console.log('reading... ', messagesData.results[0].username);
    $('#chats').append(domMessage);
    for(var i = 0; i < messagesData.results.length; i++) {
      //TODO, print all list [DONE]
      // messagesData[i] this is an object with user, roomname, text
      // we want to restructure each object into a DOM node
      // we can do this with MessageView
      var messageData = messagesData.results[i]; 
      // console.log(messageData);
      var domMessage = MessageView.render({
        username: messageData.username,
        text: messageData.text,
        roomname: messageData.roomname
      });
      // console.log(domMessage);
      // var domMessage = MessageView.render(); <----- error line, jon xie 
      $('#chats').append(domMessage);
      console.log('helloooo');
    }
  },

  renderMessage: function(messageData) {
    //TODO
  },

  autoRefresh: function() {
    // call initialize
    console.log('inside autorefresh');
    setInterval(function() {

      $chats.html('');
      MessagesView.render();
    }, 2000)

  }

};