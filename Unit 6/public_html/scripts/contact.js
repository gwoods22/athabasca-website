$(document).ready(function(){
    $.ajax({
        url: "https://quotes.rest/qod",
      }).done(function(res) {
        let quoteObj = res.contents.quotes[0];

        $('.quote h4').text(quoteObj.quote)
        $('.quote span').text(quoteObj.author)
      });
});