$(document).ready(function () {
  $.ajax({
    url: "https://quotes.rest/qod",
  }).done((res) => {
    let quoteObj = res.contents.quotes[0];
    $('.quote h4').text(quoteObj.quote)
    $('.quote span').text(quoteObj.author)
  }).fail((res) => {
    $('.quote p').hide()
    let timeLeft = res.responseJSON.error.message.split('wait for ')[1]

    if (res.responseJSON.error.code === 429) {
      $('.quote h4').text(`Too many requests to the quote API, please comeback in ${timeLeft}!`)
    } else {
      $('.quote h4').text('Issue with Quote API')
    }
  });

  $('#form').submit(function(event) {
    event.preventDefault();

    // Prepare data to send
    let data = {};
    $.each($('#form').serializeArray(), (i, field) => {
      data[field.name] = field.value;
    });
    // const formElements = Array.from(form[0]);
    // formElements.map(input => (data[input.name] = input.value));

    // Log what our lambda function will receive
    console.log('Form data:');
    console.log(data);


    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      'https://znbgb9ohpg.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer',
      true
    );
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // The form submission was successful
        $('#form').trigger('reset');
        console.log('Form submission successful');
        $('#form-response').text('Thanks for the message! I’ll be in touch shortly.')
      } else {
        // The form submission failed
        $('#form-response').text('Something went wrong');
        console.error(response.target);
        // console.error(JSON.parse(response.target.response).message);
      }
    };
  });
});