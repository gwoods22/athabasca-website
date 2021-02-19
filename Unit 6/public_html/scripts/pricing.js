/*
 * Update timeline slider label
 */
var updateTimeline = function (sliderValue, sliderLabel) {
   // update slider label text based on input value
    switch (sliderValue) {
        case 1:
            sliderLabel.innerText = 'No rush';
            break;
    
        case 2:
            sliderLabel.innerText = '2-3 weeks';
            break;
    
        // case 3
        default:
            sliderLabel.innerText = 'This week';
            break;
    }
}

/*
 * Update numerical slider labels
 */
var update = function (id) {
    // get slider input value
    var sliderValue = parseInt(document.getElementById(id).value);
    // get slider label element
    var sliderLabel = document.getElementById(`${id}-value`);

    if (id === 'timeline') {
        // run timeline slider label update function
        updateTimeline(sliderValue, sliderLabel)
    } else {
        // update slider label text
        sliderLabel.innerText = sliderValue;
    }

    // update cost value
    updateCost()
}

/*
 * Hide arrows on focus
 */
var hideArrows = function () {
    let arrowLeft = document.getElementsByClassName("arrow-left");
    let arrowRight = document.getElementsByClassName("arrow-right");

    // if arrow has not already been hidden
    if (! arrowRight[0].className.includes('hide')) {
        //hide all 6 arrows
        arrowLeft[2].className += ' hide';
        arrowLeft[1].className += ' hide';
        arrowLeft[0].className += ' hide';
        arrowRight[2].className += ' hide';
        arrowRight[1].className += ' hide';
        arrowRight[0].className += ' hide';
    }
}

/*
 * Update cost value based on sliders
 */
var updateCost = function () {
    // get slider values as ints
    var timelineValue = parseInt(document.getElementById('timeline').value);
    var pages = parseInt(document.getElementById('pages').value);
    var revisions = parseInt(document.getElementById('revisions').value);

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
    var costElement = document.getElementById('cost');
    costElement.innerText = costString;
}