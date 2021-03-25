/* Display Clock 
 * By: Tushar Gupta
 * Url: http://jsfiddle.net/cse_tushar/fKKSb/
 * Date accessed: Feb 11, 2021
 * 
 * No clear license available but found publicly on jsfiddle.net
 */

// Checks passed param i is < 10; if so return number
//  with a zero in front, if not just return number.
function checkForZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    // get user's Timezone in minutes from GMT
    var browserTimezone = (new Date).getTimezoneOffset();
    // get difference in minutes from EST
    var timezoneOffset = browserTimezone - 240;
    // create new date object including offset
    var todayInEST = new Date((new Date()).getTime() + timezoneOffset*60000);

    // get minutes, hours, seconds
    var hours = todayInEST.getHours();
    var minutes = todayInEST.getMinutes();
    var seconds = todayInEST.getSeconds();

    // add a zero in front of numbers<10
    minutes = checkForZero(minutes);
    sseconds = checkForZero(seconds);

    // update #time span tag
    $('#time').text(hours + ":" + minutes + ":" + sseconds);
}

// run once then again every second
startTime()
setInterval(function() {
    startTime()
}, 1000);