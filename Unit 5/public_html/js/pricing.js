 /*
         * Rounds to nearest interval
         */
        round = function (n) {
            if (n - Math.floor(n / intervals) * intervals < Math.ceil(n / intervals) * intervals - n) {
                return Math.floor(n / intervals) * intervals
            } else {
                return Math.ceil(n / intervals) * intervals
            }
        }


        /*
         * Calculates house price based on range slider
         */
        calc = function (input) {
            let index = 0;
            //while input is larger than the next range value increment
            //This returns the index of the range value that is immediately less than input
            while (range[index + 1] < input) {
                index++;
            }
            //immediately lower range value
            let floor = range[index];
            //immediately higher range value
            let ceil = range[index + 1];
            //corresponding base price value
            //final price will between this value and the next price value
            let base = price[index];
            //gap between current price value (base) and next price value
            let gap = price[index + 1] - price[index];
            //					       	|	 fraction of range gap |  *  | gap | + | base price	|
            let result = round((input - floor) / (ceil - floor) * gap + base);
            //use    ^^ round function to round to nearest 25,000

            if (result < minPrice) return minPrice;
            else return result;

        }


        /*
         * Update house value and savings
         */
        update = function () {
            houseValueVar = calc(document.getElementsByClassName("srs-range-slider")[0].value);
            houseValue.innerHTML = "$".concat((houseValueVar).toLocaleString());
            savings.innerHTML = "$".concat(Math.round(houseValueVar * saveDecimal).toLocaleString());
        }


        /*
         * Hide arrows on focus
         */
        hide = function () {
            let arrowLeft = document.getElementsByClassName("srs-arrow-left");
            let arrowRight = document.getElementsByClassName("srs-arrow-right");
            arrowLeft[0].className += 'hide';
            arrowRight[0].className += 'hide';
        }


        /*
         * Read PHP args and set defaults
         */
        var title = 'Rate Calculator'
        if (title == '') {
            title = "You Could Save";
        }

        var hideArrows = false;
        var minPrice = 200000;
        var midPrice = 800000;
        var maxPrice = 2000000;
        var intervals = 25000;
        var saveDecimal = parseFloat(0.01695);

        /*
         * Set Labels
         */
        document.getElementsByClassName("srs-min")[0].innerHTML = "$".concat(minPrice.toLocaleString());
        document.getElementsByClassName("srs-max")[0].innerHTML = "$".concat(maxPrice.toLocaleString());
        document.getElementsByClassName("srs-title")[0].innerHTML = title;

        /*
         * Arrow Hide logic and slider points
         */
        if (hideArrows) {
            hide();
        }
        //These are the slider values at a corresponding percentage of the range
        var price = [minPrice, midPrice, maxPrice];
        var range = [1, 500, 1000];



        /*
         * Set initial house value and savings
         */
        var slider = document.getElementsByClassName("srs-range-slider")[0];
        var savings = document.getElementsByClassName("srs-savings")[0];
        var houseValue = document.getElementsByClassName("srs-house-value")[0];
        var houseValueVar = calc(slider.value);
        houseValue.innerHTML = "$".concat((houseValueVar).toLocaleString());
        savings.innerHTML = "$".concat(Math.round(houseValueVar * saveDecimal).toLocaleString());