var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function() {
    // Stop the browser from submitting the form
    event.preventDefault();
    // console.log('event', event);
    // console.log('click!'); 

    // the input value is stored in the event's target object under the property value
    // event.target[i].value
    // we want to post this message to the server
    var input = event.target[0].value;
    
    var message = {
      username: 'dream team j and e',
      text: input,
      roomname: 'sunset'
    };
    App.send(message);
    // console.table(message);

    // console.log('aaaaaaaaaaaaa   : ' + messageValue);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  // clickButton: function() {
  //   $('.submit').on('click', function(e) {
  //     //fill in the blank 
  //   });
  // }

};



