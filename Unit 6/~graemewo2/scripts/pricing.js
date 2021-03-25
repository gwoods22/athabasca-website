/*
 * Update timeline slider label
 */
var updateTimeline = function (sliderValue, sliderLabel) {
   // update slider label text based on input value
    switch (sliderValue) {
        case 1:
            sliderLabel.text('No rush');
            break;
    
        case 2:
            sliderLabel.text('2-3 weeks');
            break;
    
        // case 3
        default:
            sliderLabel.text('This week');
            break;
    }
}

/*
 * Update numerical slider labels
 */
var update = function (id) {
    // get slider input value
    var sliderValue = parseInt($(`#${id}`).val());
    // get slider label element
    var sliderLabel = $(`#${id}-value`);

    if (id === 'timeline') {
        // run timeline slider label update function
        updateTimeline(sliderValue, sliderLabel)
    } else {
        // update slider label text
        sliderLabel.text(sliderValue);
    }

    // update cost value
    updateCost()
}

/*
 * Hide arrows on focus
 */
var hideArrows = function () {
    // if arrow has not already been hidden
    if (! $('.arrow-left').hasClass('hide')) {
        //hide left and right arrows
        $('.arrow-left').addClass('hide')
        $('.arrow-right').addClass('hide')
    }
}

/*
 * Update cost value based on sliders
 */
var updateCost = function () {
    // get slider values as ints
    var timelineValue = parseInt($('#timeline').val());
    var pages = parseInt($('#pages').val());
    var revisions = parseInt($('#revisions').val());

    // get rate based on timelineValue
    var rate;
    switch (timelineValue) {
        case 1:
            rate = 20;
            break;
    
        case 2:
            rate = 25;
            break;
    
        // case 3
        default:
            rate = 35;
            break;
    }

    // calculate cost
    var cost = rate * (3 + 3*pages + 2*revisions);
    // if the highest pages or highest revisions slider value selected,
    //  set plusBool to true
    var plusBool = pages === 5 || revisions === 4;
    // create cost string rounded with $ and +
    var costString = '$' + Math.round(cost).toString() + (plusBool ? '+' : '');

    // get cost element and update innerText with costString
    $('#cost').text(costString);
}