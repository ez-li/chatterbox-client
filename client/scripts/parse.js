var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function (message, successCB = null, errorCB = null) {
    // todo: save a message to the server
    // console.log('inside Parse.create', message)
    $.ajax({
      url: Parse.server,
      type: 'POST',
      // data: { order: '-createdAt' },
      data: JSON.stringify(message),
      dataType: 'text',
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to send messages', error);
      }
    });
  },

  readAll: function (successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};