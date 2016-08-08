// Set inital value
var score_val = 0;


// Generate Score dynamic
function newScore() {
    return window.score_val += 1;
}

// First turn
function firstTurn() {
    nextTurn();

    //$('.contentplay').fadeOut();
    $('.contentplay').css('display', 'none');
    $('.main').fadeIn(500);
}





// create new turn
function nextTurn() {


    var valueSum1 = 1 + Math.floor(Math.random() * 9), // Create random number between 1 and 9
        valueSum2 = 1 + Math.floor(Math.random() * 9), // Create random number between 1 and 9
        sum1 = document.getElementById('sum1'),
        sum2 = document.getElementById('sum2'),
        score_val = newScore(),
        // countDown = startCountdown(),
        countDown = startCountdown(),
        resultRandom = 1 + Math.floor(Math.random() * 18), // Create random number between 1 and 18
        viewresultRandom = document.getElementById('resultrandom'),
        trueResult = valueSum1 + valueSum2,
        right = document.getElementById('right'),
        wrong = document.getElementById('wrong'),
        r_value = [trueResult, resultRandom],
        r_randomBtV = Math.floor(2 * Math.random()); // Randon between trueResult and randomresult
    viewResult = r_value[r_randomBtV];


    sum1.innerHTML = valueSum1;
    sum2.innerHTML = valueSum2;
    viewresultRandom.innerHTML = viewResult;


    // verify true result
    if (viewResult == trueResult) {
        console.log('True Result');
        right.setAttribute('onclick', 'nextTurn()');
        wrong.setAttribute('onclick', 'endGame()');
    } else if (viewResult != trueResult) {;
        console.log('False Result');
        wrong.setAttribute('onclick', 'nextTurn()');
        right.setAttribute('onclick', 'endGame()');
    };

    // get value score after insert new score
    document.getElementById('score').getAttribute('value');
    document.getElementById('score').setAttribute('value', score_val);
}


function endGame() {
    $('.sum,.buttons').css('display', 'none');
    $('#endGame').fadeIn(1000);
    clearInterval(window.animate);
    $('progress').val(100);
}


var time = 0;

function startCountdown() {
    var barArea = document.getElementById('bar-area');
    barArea.innerHTML = '';
    clearInterval(window.animate);

    console.log(time);

    var barra1 = document.createElement("progress");
    barra1.setAttribute("value", "0");
    barra1.setAttribute("max", "100");
    barArea.appendChild(barra1);

    var max = barra1.getAttribute('max');
    var time = (1000/max) *2;
    var value = barra1.getAttribute('value');
    var value = parseInt(1);
    console.log(max);
    console.log(time);

    var loading = function () {
        value += 1;
        addValue = barra1.setAttribute('value', value);

        if (value == max) {
            var time = 0;
            //var value = 0;
            addValue = barra1.setAttribute('value', 0);
            clearInterval(window.animate);
            endGame();
            return false;
        }
    };

    window.animate = setInterval(function () {
        loading();
    }, time);

};