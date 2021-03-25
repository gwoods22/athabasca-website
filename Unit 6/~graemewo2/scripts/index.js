$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        prevArrow: '<div class="arrow-left"></div>',
        nextArrow: '<div class="arrow-right"></div>'
    });

    var configProfile = {
        "profile": {"screenName": 'GrowWithGraeme'},
        "domId": 'tweets',
        "maxTweets": 3,
        "enableLinks": true, 
        "showUser": true,
        "showTime": true,
        "showImages": true,
        "lang": 'en'
    };
    twitterFetcher.fetch(configProfile);
});