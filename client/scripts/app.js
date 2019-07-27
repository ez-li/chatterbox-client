var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    // debugger;
    FormView.initialize();
    RoomsView.initialize();
    
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  send: function(message) {
    // pass in the message from the form and send it to the server
    Parse.create(message);
  },

  fetch: function(callback = ()=>{}) {

    // pass in data into messagesView.render();
    // this will refactor each message into a DOM node
    Parse.readAll((data) => {
      // examine the response from the server request:
      MessagesView.render(data);
      // console.log(data);
      // objMessage = data[]
      // $('#chats').append(JSON.parse(data));
      
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};


App.initialize();